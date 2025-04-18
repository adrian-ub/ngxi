import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsKeySkeletonIcon],svg[meteor-icons-key-skeleton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11 12l9-9l3 3m-6 0l3 3"></svg:path><svg:circle cx="7" cy="16" r="5.5"></svg:circle></svg:g>`,
})
export class MeteorIconsKeySkeletonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
