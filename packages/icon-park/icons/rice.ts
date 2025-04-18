import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRiceIcon],svg[icon-park-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M24 38C33.3888 38 41 30.9411 41 21H7C7 30.9411 14.6112 38 24 38Z"></svg:path><svg:path d="M30 21C30 15.4772 25.7467 11 20.5 11C15.2533 11 11 15.4772 11 21"></svg:path><svg:path d="M39 21C39 17.6863 36.234 15 32.822 15C31.379 15 30.0515 15.4805 29 16.2857"></svg:path><svg:path stroke-linecap="round" d="M33 15L36 5"></svg:path><svg:path stroke-linecap="round" d="M38.0002 18.0001L42.0002 11.0001"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 37L16 43H32L30 37"></svg:path></svg:g>`,
})
export class IconParkRiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
