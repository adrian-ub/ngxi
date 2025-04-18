import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCheeseWedgeIcon],svg[fluent-emoji-flat-cheese-wedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FCD53F" d="M29 15.075c-1.27 0-2.38-1.03-2.38-2.31c0-1.314 1.096-2.31 2.38-2.31v-2.03c0-.87-.8-1.52-1.65-1.33l-10.94-.717l-11.34 5.627c-.62.14-1.07.69-1.07 1.33v9.01a2.121 2.121 0 0 1 0 4.24v2.01c0 .87.8 1.52 1.65 1.33l22.28-4.91c.62-.14 1.07-.69 1.07-1.33z"></svg:path><svg:path fill="#FFB02E" d="m15.74 2.565l-11.02 9.56l23.35-4.99l-9.78-4.89c-.84-.42-1.84-.29-2.55.32m8.74 13.87a3.67 3.67 0 1 1-7.34 0a3.67 3.67 0 0 1 7.34 0m-11.87 5.55a2.12 2.12 0 1 0 0-4.24a2.12 2.12 0 0 0 0 4.24m6.35 1.14a1.14 1.14 0 1 1-2.28 0a1.14 1.14 0 0 1 2.28 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCheeseWedgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
