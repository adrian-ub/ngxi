import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearchNegativeIcon],svg[healthicons-medical-search-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsMedicalSearchNegative0)" clip-rule="evenodd"><svg:path d="M27 34c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13s5.82 13 13 13m-2-15v-4h4v4h4v4h-4v4h-4v-4h-4v-4z"></svg:path><svg:path d="M0 0h48v48H0zm14.632 32.126l-1.705.119L6 39.172L8.828 42l6.884-6.884l.158-1.4l1.346-1.346A14.94 14.94 0 0 0 27 36c8.284 0 15-6.716 15-15S35.284 6 27 6s-15 6.716-15 15c0 3.826 1.432 7.317 3.79 9.967z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicalSearchNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicalSearchNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
