import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundCategoryIcon],svg[ic-round-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.15 3.4L7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4a.993.993 0 0 0-1.7 0"></svg:path><svg:circle cx="17.5" cy="17.5" r="4.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1"></svg:path>`,
})
export class IcRoundCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
