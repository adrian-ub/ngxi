import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearchIcon],svg[tdesign-map-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.886 1.859l8.086 3.537L22 2.382V10h-2V5.618l-3 1.5V10h-2V7.154L9 4.53v10.853l2.345 1.172l-.895 1.79l-2.406-1.204L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM17.25 13.5a2.75 2.75 0 0 1 1.946 4.693l-.008.008a2.75 2.75 0 1 1-1.938-4.7m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignMapSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
