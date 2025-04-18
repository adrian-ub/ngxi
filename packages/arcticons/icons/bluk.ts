import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlukIcon],svg[arcticons-bluk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 36.5V27L24 34l15.5-7v9.5M8.5 27L24 20l15.5 7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 22.291l-10.362 4.71L24 31.71L34.362 27zM24 34v9.5M13.638 27V4.5M34.362 27V4.5m-16.195 9.511l6.159 4.251l7.297-1.646l1.337-6.097l-6.159-4.252l-7.296 1.647zm7.496-1.846l-1.337 6.097"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.504 7.914l6.159 4.25l7.297-1.646"></svg:path>`,
})
export class ArcticonsBlukIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
