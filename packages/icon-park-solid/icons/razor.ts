import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRazorIcon],svg[icon-park-solid-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRazor0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="5" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" d="M14 5v20M34 5v20"></svg:path><svg:path stroke="#fff" d="M30 5h8"></svg:path><svg:path stroke="#000" d="M5 11h38M5 19h38"></svg:path><svg:path stroke="#fff" d="M5 21V9m38 12V9M10 5h8m12 20h8m-28 0h8m14 0a8 8 0 1 1-16 0"></svg:path><svg:path stroke="#fff" d="m28 32l-1 5v7m-7-12l1 5v7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRazor0)"></svg:path>`,
})
export class IconParkSolidRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
