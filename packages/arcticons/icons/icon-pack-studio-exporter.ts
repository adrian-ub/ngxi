import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIconPackStudioExporterIcon],svg[arcticons-icon-pack-studio-exporter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.678 31.924h2.758a4.39 4.39 0 0 0 4.252-3.308l2.057-8.1a4.39 4.39 0 0 1 4.252-3.306h7.325"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.612 20.919l3.71-3.709l-3.71-3.71m-7.278 15.318a4.39 4.39 0 0 0 3.663 1.972h7.325M13.678 16.076h2.758a4.39 4.39 0 0 1 4.094 2.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.612 27.081l3.71 3.709l-3.71 3.71"></svg:path>`,
})
export class ArcticonsIconPackStudioExporterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
