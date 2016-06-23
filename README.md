### A Mini-Course on React Native Flexbox

Flexbox solves design issues that are particularly challenging on mobile, and it
does so strikingly well — without requiring hacky CSS or Javascript tricks.

But there’s a learning curve. The property names all sound incredibly similar
and do nothing to indicate what sets them apart. On top of that, each property
has a set of values that are mostly similar, yet slightly different, from the
values of other properties. And to compound the confusion, not all Flexbox
properties are implemented in React Native. This can cause surprises when you
try to follow regular CSS documentation, only to discover that React Native
doesn’t implement a particular feature, such as the reverse flex properties.

To help make it easier to internalize the rules of Flexbox, I’ve decided to
write the guide that I would have liked to read — with the underlying concepts
explained and simple examples along the way. Come doodle along with me and get
comfortable solving design scenarios with Flexbox.

#### Contents

We’ll take an incremental approach to learning Flexbox, gradually adding more
and more properties to our vocabulary and doodling along

Then we’ll get our hands dirty and write some code to produce actual UI. At the
end of the guide, my hope is that you will be comfortable thinking through UI
design and practice creating your own. Have a look at the examples on the
[GitHub repo](https://github.com/yonibot/flexbox-manual-for-react-native) and
the further reading at the bottom to see more samples and inspiration.

### Approaching Flexbox Design

#### Choose your Main Axis — **flexDirection**

All of the Flexbox properties that we discuss (with the exception of
**alignSelf**) refer to methods that are applied to an outer box and
automagically align the inner elements for you. Also, there’s no need to set
**display: ‘flex’ **on React Native** **because you don’t have any other choice.

Let’s imagine a box into which we add five green circles.

Your first decision is choosing the direction of the circles — and you do that
by determining the **flexDirection** of the parent box, or its main axis. Your
choices are **row **and **column**.** **If you assumed that **row** meant laying
out elements one after another in rows down the page, you would be incorrect. It
means that items are laid out horizontally — in the **direction** of a row.
*Column* means that items are laid out vertically — in the **direction** of a
column. I might be the only one, but I found this hard to get used to.

If wrapping is enabled, row items will fill up the row until beginning a new
row, and column will do the same with columns.

    flexDirection: 'column' || 'row'

The default direction is **column**, so let’s doodle our five circles starting
from the top-left corner and going downwards. Label it with ‘**flexDirection:
‘column**’ and then try doodling the circles in **row** direction, starting from
the same point.

*Note: On regular Flexbox, you’d be able to reverse the order of the items using
‘***column-reverse***’ and ‘***row-reverse***’, and specify the order of
individual items by giving each item an ***order ***integer***.**

#### Space out your Main Axis — JustifyContent

Now that we’ve chosen a main axis, we can determine the spacing of the items on
that axis with **justifyContent**. We have two choices:

1.  We can align the items with **flex-start, flex-end, **or **center.**
1.  Or we can space the items out evenly across the axis (with **space-between** the
elements or **space-around** the elements)

Doodle yourself a top navigation bar with a home button flanked by two
directional icons on either sides of the screen — a left chevron (<) and a right
chevron (>). How would you write down the Flex properties to reflect that setup?

Again, choose your main axis (**flexDirection: ‘row’**).** **Then set the
spacing along that axis: **justifyContent: ‘space-between’** to put equal spaces
*between* the three items (but not around all of them).

    justifyContent: 'flex-start' || 'flex-end' || 'center' || 'space-around' || 'space-between'

#### Space out your Cross Axis— alignItems

**alignItems** is an unfortunate choice of property name as it leaves us
guessing as to what exactly it does. So I’ve come up with an acronym to make it
easier:

> *alignItems is ***C***onfusing — it determines ***C***ross-axis spacing*

alignItems determines spacing for the cross axis — whatever that axis may be. If
you’ve chosen your main axis to be **column** / Y, your cross axis will be X and
alignItems will determine spacing along the X axis.

Again you have two options for cross-axis spacing, but with a twist:

1.  You can use **flex-start** or **flex-end** to align all items at the beginning
or end of the cross axis, or you can have all items bunched in the **center**.
So far it’s the same as justifyContent.
1.  Alternatively, you can use **stretch** to stretch the items across the
cross-axis until they reach their respective limits. Unlike justifyContent, we
have no **space-around** and **space-between** — just stretch.

*Classic Flexbox includes a ***baseline*** property as well, which aligns items
based on the baseline of their content, but this is not currently supported in
React Native*.

    alignItems: 'flex-start' || 'flex-end' || 'center' || 'stretch'

Let’s practice!

Doodle three adjacent buttons at the center of the screen: ‘[Cow]’, ‘[Ostrich]’,
and ‘[Cheeta]’. How would these items first appear onscreen before applying any
styling except to the buttons themselves? The three buttons would appear in a
column at the top left of the screen pressed against each other.

Now write down the correct flex settings. First put them in a row:** **Set**
**the main axis to **flexDirection: ‘row’.** Center them in their cross axis**
**using **alignItems: ‘center’**. Where are our buttons now? They are centered
in their cross-axis (Y) but not in their primary axis (X). Let’s center them in
their main axis as well by setting **justifyContent: ‘center’.**

*To remember that ***alignItems ***only*** ***has ***stretch*** rather than
***space-around ***and*** space-between***, recall that justifyContent spaces
out the main axis — so it makes sense that it would have more options.*

#### Change the Cross Axis Alignment of a Single Item— alignSelf

What if we want to add one black sheep element that doesn’t fit into its cross
axis?

**alignSelf** lets us define the cross-axis alignment of a single item. It uses
(mostly) the same properties as alignItems, but it works on individual elements
rather than containers.

Doodle Scenario: You have a login screen with three elements on the page. Near
the top is the word “Login” in large print, followed by a box containing inputs
for email and password in the center of the page, and then a copyright message
placed unobtrusively on the bottom right-hand side. How do we arrange our boxes
so that only the bottom item is moved to the right? (see the [sample GitHub
repo](https://github.com/yonibot/flexbox-manual-for-react-native) for just such
an example).

Start by declaring the main axis to be **flexDirection: ‘column’**, which is the
default so we can really skip this. Then space out the main Y axis using
**justifyContent**: **‘space-around’.**

We’re now left with the copyright message near the bottom, but we need to move
it to the right (along the cross X axis). Let’s look at our options:

    alignSelf: 'flex-start' || 'flex-end' || 'center' || 'stretch' || 'auto'

alignSelf has the same properties as alignItems, with the addition of **auto
**(i.e. take my parent’s cross-axis value or default to **stretch**). We can use
‘**flex-end**’ to bring the item to the end of its cross X axis, or the
right-hand side of the screen.

#### Item Size Fluidity — Setting flex: 1

Let’s say we want to let an element change its own size automatically depending
on how much room it has to grow or shrink. Just set **flex: 1.**

This solves a number of interesting design challenges. For instance, if you want
a sticky footer — you can put two Views within a parent View and give the first
View **flex: 1**. That way it will take up all space not taken up by the second
View, our sticky footer. At the end of this post, I’ve included a code sample.

#### Wrapping up Theory — flexWrap

What would it look like if we placed 20 big fat buttons on the page without
specifying any flex properties? Would the page scroll to fit the items? Would
the items squeeze?

No and No — scrolling requires a ScrollView, and items just go on forever if you
don’t specify that they should **flexWrap: ‘wrap’ **or give them **flex**
fluidity. The buttons would technically be there, but you would only see the
number of buttons that fit on your screen. The same is true when your
**flexDirection** is **row — **items would keep on going horizontally. You can
explicitly disable this behaviour by setting **flexWrap: ‘nowrap’.**

    flexWrap: 'wrap' || 'nowrap'

*Note: Missing on React Native is the ***reverse ***option (***‘wrap-reverse’)
***as well as a way to specify the relationship between wrapped lines, called
***alignContent.**

### In Practice

As a small example of React Native UI code, I’ve added a little sticky footer
example. It has a top header (“Page with a Sticky Footer”), a content area that
takes up the bulk of the page, and a little sticky footer.

Let’s go through this line by line and make sure we understand each styling
choice:

We’d like our enclosing view to have the ability to grow to the entire display,
so we start by giving it a **flex: 1**. But so far it won’t use much of that
space because it’s only a single element.

Then we determine our main axis, which is **column **— great, that’s the
default. We want the footer to be on the right side on the X axis, so we give it
**alignSelf: ‘flex-end’. **Now, we want our middle View to take up the remaining
space, so we give it a **flex: 1** to give it the fluidity to grow and take up
as much space as it can, which is the remainder of the screen due to the
parent’s **flex: 1**.

I provided a couple of simple UI examples to try out in the accompanying Git
repo —
[https://github.com/yonibot/flexbox-manual-for-react-native](https://github.com/yonibot/flexbox-manual-for-react-native).

#### Further practice:

If you want more practice with Flexbox and general React Native design, these
are incredible resources that I strongly recommend. Give them a look!

[Flexbox Froggy](http://flexboxfroggy.com/)** —
**[http://flexboxfroggy.com/](http://flexboxfroggy.com/)

A terrific way to interactively learn Flexbox by doing. One of the greatest
pieces of educational software that I’ve ever seen. Built by @thomaspark.

[Solved by Flexbox ](https://philipwalton.github.io/solved-by-flexbox/)**—
**[https://philipwalton.github.io/solved-by-flexbox/](https://philipwalton.github.io/solved-by-flexbox/)

A showcase of common design patterns that are easily implemented using Flexbox.
Check these out.

Another interesting project for practicing UI design for React Native is [React
Native Katas](https://github.com/jondot/ReactNativeKatas)**, **a project
released last week by [@](https://medium.com/u/333bfa9d9c3)jondot. He has some
simple, inspiring designs to learn from.
