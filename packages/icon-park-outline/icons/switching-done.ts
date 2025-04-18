import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSwitchingDoneIcon],svg[icon-park-outline-switching-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M29.633 4h-7.64v23h22v-6.037"></svg:path><svg:path stroke-linejoin="round" d="m29.002 13.003l4.563 4.442L45 6"></svg:path><svg:path d="M30.005 44H17.658c-1.702 0-3.742-.568-5.11-2.387c-.925-1.23-1.543-3.03-1.543-5.613V25"></svg:path><svg:path stroke-linejoin="round" d="m3 33l8.005-8l8.009 8"></svg:path></svg:g>`,
})
export class IconParkOutlineSwitchingDoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
