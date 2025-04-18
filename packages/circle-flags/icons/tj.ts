import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTjIcon],svg[circle-flags-tj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTj0)"><svg:path fill="#eee" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#6da544" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#ffda44" d="M211.5 323h89v-38l-17.8 9l-26.7-26.9l-26.7 26.7l-17.8-8.9zm-51-44.6l4.2 12.7H178l-10.9 8l4.2 12.7l-10.9-8l-10.8 8l4.1-12.8l-10.7-7.9h13.4zm12.9-44.6l4.1 12.8H191l-10.8 8l4.1 12.6l-10.8-7.9l-10.9 8l4.2-12.8l-10.9-8h13.4zm36.7-33.4l4.2 12.8h13.4l-10.9 8l4.2 12.6l-11-7.7l-10.8 7.8l4.1-12.7l-10.8-7.9H206zm141.4 78l-4.2 12.7H334l10.9 8l-4.2 12.7l10.9-8l10.8 8l-4.1-12.8l10.7-7.9h-13.4zm-12.9-44.6l-4.1 12.8H321l10.8 8l-4.1 12.6l10.8-7.9l10.9 8l-4.2-12.8l10.9-8h-13.4zM302 200.4l-4.2 12.8h-13.4l10.9 8l-4.2 12.6l10.9-7.7l10.8 7.8l-4.1-12.7l10.8-7.9H306zm-46-16.6l4.1 12.7h13.5l-10.9 8l4.1 12.6l-10.8-7.8l-10.8 7.8l4.1-12.7l-10.9-7.9H252z"></svg:path></svg:g>`,
})
export class CircleFlagsTjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
