import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStopwatchIcon],svg[icon-park-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 4H17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 10L35 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V27"></svg:path></svg:g>`,
})
export class IconParkStopwatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
