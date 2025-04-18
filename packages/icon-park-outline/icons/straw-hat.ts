import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStrawHatIcon],svg[icon-park-outline-straw-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M34 22c0-5.523-4.477-10-10-10s-10 4.477-10 10m0 1c-5.978 1.204-10 3.456-10 6.034C4 32.881 12.954 36 24 36s20-3.119 20-6.966c0-2.578-4.022-4.83-10-6.034"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 22c1 .833 4 4 10 4s9-3 10-4m-15 3l2-5"></svg:path></svg:g>`,
})
export class IconParkOutlineStrawHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
