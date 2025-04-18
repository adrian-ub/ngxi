import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyMobileIcon],svg[icon-park-baby-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L24 8L44 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 18V4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 30V16"></svg:path><svg:circle cx="10" cy="36" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 30V16"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M32 36L38 30L44 36L38 42L32 36Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 23V18H19V23"></svg:path></svg:g>`,
})
export class IconParkBabyMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
