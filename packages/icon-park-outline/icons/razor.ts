import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRazorIcon],svg[icon-park-outline-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="5" rx="2"></svg:rect><svg:path d="M14 5v20M34 5v20M30 5h8M5 11h38M5 19h38M5 21V9m38 12V9M10 5h8m12 20h8m-28 0h8m14 0a8 8 0 1 1-16 0"></svg:path><svg:path d="m28 32l-1 5v7m-7-12l1 5v7"></svg:path></svg:g>`,
})
export class IconParkOutlineRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
