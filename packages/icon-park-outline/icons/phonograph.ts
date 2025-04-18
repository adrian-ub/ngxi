import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePhonographIcon],svg[icon-park-outline-phonograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" stroke="currentColor" stroke-width="4" rx="3"></svg:rect><svg:circle cx="24" cy="25" r="11" stroke="currentColor" stroke-width="4"></svg:circle><svg:rect width="4" height="4" x="22" y="23" fill="currentColor" rx="2"></svg:rect><svg:rect width="4" height="4" x="34" y="34" fill="currentColor" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m28 20l8-8"></svg:path></svg:g>`,
})
export class IconParkOutlinePhonographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
