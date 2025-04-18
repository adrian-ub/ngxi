import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAndroidIcon],svg[lineicons-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.604 14.784a.833.833 0 1 1 0-1.666a.833.833 0 0 1 0 1.666m-9.206 0a.833.833 0 1 1 0-1.666a.833.833 0 0 1 0 1.666m9.504-5.016l1.665-2.883a.345.345 0 0 0-.127-.473a.346.346 0 0 0-.473.126l-1.685 2.92A10.3 10.3 0 0 0 12 8.541a10.3 10.3 0 0 0-4.28.915L6.034 6.538a.346.346 0 0 0-.6.347L7.1 9.768c-2.858 1.554-4.813 4.448-5.1 7.866h20c-.286-3.418-2.241-6.312-5.099-7.866"></svg:path>`,
})
export class LineiconsAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
