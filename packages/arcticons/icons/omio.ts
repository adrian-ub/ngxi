import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOmioIcon],svg[arcticons-omio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.498" y="5.492" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="15.498" cy="15.492" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.368 42.494a19 19 0 0 1-.155-2.418c0-10.494 8.507-19 19-19a19 19 0 0 1 7.285 1.452m-14.906 19.98a8 8 0 0 1 7.621-10.432h0a8 8 0 0 1 7.29 4.703"></svg:path>`,
})
export class ArcticonsOmioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
