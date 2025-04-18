import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRecycleBinIcon],svg[icon-park-recycle-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 18L24 4.5L32 18"></svg:path><svg:path stroke-linejoin="round" d="M38 28.5L46 42H30"></svg:path><svg:path stroke-linejoin="round" d="M17.6914 41.6782L2.00006 41.8564L10.0001 28"></svg:path><svg:path d="M17 29H30.8217"></svg:path></svg:g>`,
})
export class IconParkRecycleBinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
