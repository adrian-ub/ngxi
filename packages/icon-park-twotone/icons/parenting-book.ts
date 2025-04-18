import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneParentingBookIcon],svg[icon-park-twotone-parenting-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTParentingBook0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 31v13H13.625C9.875 44 8 42 8 37V4h12"></svg:path><svg:circle cx="33" cy="17" r="9" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 18v-2m22 2v-2M33 8c-.167-1-1.2-3.2-4-4m4 4c.083-1 .6-3.2 2-4"></svg:path><svg:circle cx="36" cy="16" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="16" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 36h30"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTParentingBook0)"></svg:path>`,
})
export class IconParkTwotoneParentingBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
