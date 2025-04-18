import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReply2LineDuotoneIcon],svg[solar-reply-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9.5 17l-5-5l5-5"></svg:path><svg:path d="M4.5 12h10c1.667 0 5-1 5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarReply2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
