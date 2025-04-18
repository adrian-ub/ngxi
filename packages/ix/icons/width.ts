import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWidthIcon],svg[ix-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 128H42.667v256h42.666V256l79.085 79.085l30.17-30.17l-27.582-27.582h178.017l-27.583 27.584l30.17 30.17l79.057-79.057V384h42.666V128h-42.666v127.973l-79.057-79.056l-30.17 30.17l27.58 27.58H167.006l27.582-27.582l-30.17-30.17l-79.085 79.084z" clip-rule="evenodd"></svg:path>`,
})
export class IxWidthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
