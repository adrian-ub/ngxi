import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClickIcon],svg[icon-park-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4V12"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z" clip-rule="evenodd"></svg:path><svg:path d="M38.1421 9.85789L32.4853 15.5147"></svg:path><svg:path d="M9.85787 38.1421L15.5147 32.4853"></svg:path><svg:path d="M4 24H12"></svg:path><svg:path d="M9.85795 9.85787L15.5148 15.5147"></svg:path></svg:g>`,
})
export class IconParkClickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
