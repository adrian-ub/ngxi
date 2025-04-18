import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryLightIcon],svg[iconamoon-category-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="17" cy="7" r="3"></svg:circle><svg:circle cx="7" cy="17" r="3"></svg:circle><svg:path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class IconamoonCategoryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
