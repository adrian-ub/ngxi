import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBriefcaseIcon],svg[icon-park-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16C32 9.92487 28.4183 4 24 4C19.5817 4 16 9.92487 16 16"></svg:path><svg:path fill="#2F88FF" d="M9 16H39L40 28H27V25H21V28H8L9 16Z"></svg:path><svg:path d="M8 28L6 42H42L40 28"></svg:path><svg:path d="M21 25H27V31H21V25Z"></svg:path></svg:g>`,
})
export class IconParkBriefcaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
