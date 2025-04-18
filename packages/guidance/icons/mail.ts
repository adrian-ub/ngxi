import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceMailIcon],svg[guidance-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 6.5l11.375 7h.25l11.375-7m0-2.5v16.5H23c-3-.5-8-.75-11-.75S4 20 1 20.5H.5V4c3-.5 8.5-.75 11.5-.75s8.5.25 11.5.75Z"></svg:path>`,
})
export class GuidanceMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
