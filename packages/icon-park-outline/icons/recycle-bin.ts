import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRecycleBinIcon],svg[icon-park-outline-recycle-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="m16 18l8-13.5L32 18m6 10.5L46 42H30m-12.309-.322l-15.69.178L10 28"></svg:path><svg:path d="M17 29h13.822"></svg:path></svg:g>`,
})
export class IconParkOutlineRecycleBinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
