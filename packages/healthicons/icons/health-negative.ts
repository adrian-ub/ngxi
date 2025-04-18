import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthNegativeIcon],svg[healthicons-health-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHealthNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27.408 6.8a5.54 5.54 0 0 0-5.737 0L19.72 7.995c-3.267 1.996-7.248 2.374-11.101 2.74c-.873.083-1.74.166-2.59.266c0 0-.024 1.845 0 2.689l.209 7.128c.179 6.133 2.906 11.948 7.585 16.174c2.448 2.211 5.13 4.037 8.158 5.477c1.622.77 3.546.7 5.101-.187c2.623-1.496 4.906-3.297 7.113-5.29c4.679-4.226 7.406-10.041 7.585-16.174l.209-7.151c.024-.832.001-2.666.001-2.666a71 71 0 0 0-3.162-.426c-3.27-.392-6.526-.781-9.383-2.528zM22 15v7h-7v4h7v7h4v-7h7v-4h-7v-7z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHealthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHealthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
