import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBabyMobileIcon],svg[icon-park-outline-baby-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L24 8l20 10m-20 0V4M10 30V16"></svg:path><svg:circle cx="10" cy="36" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 30V16m-6 20l6-6l6 6l-6 6zm-3-13v-5H19v5"></svg:path></svg:g>`,
})
export class IconParkOutlineBabyMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
