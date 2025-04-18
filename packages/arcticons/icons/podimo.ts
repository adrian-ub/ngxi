import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPodimoIcon],svg[arcticons-podimo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.946 35.744V6.038c0-.85.689-1.538 1.538-1.538h0c8.597 0 15.566 6.969 15.566 15.566v1.65c0 8.597-6.97 15.566-15.566 15.566h0c-.85 0-1.538-.688-1.538-1.538M7.95 27.217V5.618c0-.617.501-1.118 1.119-1.118h0c6.25 0 11.317 5.067 11.317 11.317v1.201c0 6.25-5.067 11.317-11.317 11.317h0c-.618 0-1.119-.5-1.119-1.118"></svg:path><svg:circle cx="14.168" cy="37.282" r="6.218" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPodimoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
