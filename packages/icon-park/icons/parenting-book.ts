import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParentingBookIcon],svg[icon-park-parenting-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 31V44C38 44 17.375 44 13.625 44C9.875 44 8 42 8 37C8 32 8 4 8 4H20"></svg:path><svg:circle cx="33" cy="17" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 8C32.8333 7 31.8 4.8 29 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 8C33.0833 7 33.6 4.8 35 4"></svg:path><svg:circle cx="36" cy="16" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="16" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 36H38"></svg:path></svg:g>`,
})
export class IconParkParentingBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
