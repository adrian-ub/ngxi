import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGalleryAlt1Icon],svg[arcticons-gallery-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="12.748" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.558" ry="10.248"></svg:ellipse><svg:ellipse cx="31.956" cy="16.044" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.248" ry="5.558" transform="rotate(-45 31.956 16.044)"></svg:ellipse><svg:ellipse cx="35.252" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.248" ry="5.558"></svg:ellipse><svg:ellipse cx="31.956" cy="31.956" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.558" ry="10.248" transform="rotate(-45 31.956 31.956)"></svg:ellipse><svg:ellipse cx="24" cy="35.252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.558" ry="10.248"></svg:ellipse><svg:ellipse cx="16.044" cy="31.956" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.248" ry="5.558" transform="rotate(-45 16.044 31.956)"></svg:ellipse><svg:ellipse cx="12.748" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.248" ry="5.558"></svg:ellipse><svg:ellipse cx="16.044" cy="16.044" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.558" ry="10.248" transform="rotate(-45 16.044 16.044)"></svg:ellipse>`,
})
export class ArcticonsGalleryAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
