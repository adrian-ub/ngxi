import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVialIcon],svg[icon-park-outline-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M30 33V4H18v28.968M30 14h-5m5 6h-5"></svg:path><svg:path d="M18 33v4.699C18 41.179 20.686 44 24 44s6-2.821 6-6.301v-4.635z"></svg:path></svg:g>`,
})
export class IconParkOutlineVialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
