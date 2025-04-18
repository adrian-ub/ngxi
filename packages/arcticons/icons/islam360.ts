import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIslam360Icon],svg[arcticons-islam360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="5.115" height="23" x="29.767" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.387" ry="1.387"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.443 24.694c0-.766.62-1.388 1.387-1.388h2.34c.766 0 1.387.621 1.387 1.388v9.419c0 .766-.62 1.387-1.387 1.387h-2.34a1.387 1.387 0 0 1-1.387-1.387V13.887c0-.766.62-1.387 1.387-1.387h2.34c.766 0 1.387.621 1.387 1.387v4.129m-13.438-4.129v4.129m-.001 11.968v4.129m1.388-10.665h2.34c.766 0 1.387.621 1.387 1.388v9.277c0 .766-.62 1.387-1.387 1.387h-2.34a1.387 1.387 0 0 1-1.388-1.387"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.846 23.448c.766 0 1.387-.62 1.387-1.387v-8.174c0-.766-.62-1.387-1.387-1.387h-2.34c-.766 0-1.388.621-1.388 1.387"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsIslam360Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
