import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSparkasseGeorgeIcon],svg[arcticons-sparkasse-george-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.341" height="8.081" x="12.061" y="35.527" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.552"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.24 38.22h7.162m-9.341 2.694h7.162"></svg:path><svg:circle cx="16.725" cy="33.975" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="16.439" r="11.939" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.939 31.561A11.94 11.94 0 0 1 24 43.5"></svg:path>`,
})
export class ArcticonsSparkasseGeorgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
