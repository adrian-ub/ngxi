import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseEyeOutlineIcon],svg[mdi-briefcase-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0-3c-2.7 0-5.1 1.7-6 4c.9 2.3 3.3 4 6 4s5.1-1.7 6-4c-.9-2.3-3.3-4-6-4m0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5m-7.9-1.8l-.3-.7H4V8h16v5.6c.7.3 1.4.6 2 1.1V8c0-.5-.2-1-.6-1.4S20.6 6 20 6h-4V4c0-.6-.2-1-.6-1.4S14.6 2 14 2h-4c-.6 0-1 .2-1.4.6S8 3.4 8 4v2H4c-.6 0-1 .2-1.4.6S2 7.5 2 8v11c0 .5.2 1 .6 1.4s.8.6 1.4.6h5.8c-.3-.4-.5-.8-.7-1.3M10 4h4v2h-4z"></svg:path>`,
})
export class MdiBriefcaseEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
