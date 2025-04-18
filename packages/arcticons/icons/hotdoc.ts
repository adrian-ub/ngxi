import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHotdocIcon],svg[arcticons-hotdoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.906 40.455L24.1 45.5l-6.852-4.981l-8.38-1.245l-1.323-8.368L2.5 24.1l4.982-6.852l1.244-8.38l8.368-1.323L23.9 2.5l6.852 4.982l8.38 1.244l1.323 8.368L45.5 23.9l-4.981 6.852l-1.245 8.38Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.783 19.91v-7.954h8.328v8.141h8.277v7.938h-8.21v8.01H20.01v-8.11h-8.4v-8.033Z"></svg:path>`,
})
export class ArcticonsHotdocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
