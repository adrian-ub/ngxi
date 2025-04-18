import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrackerDetectIcon],svg[arcticons-tracker-detect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.316 22.289A12.8 12.8 0 0 1 24 11.201c7.069 0 12.799 5.73 12.799 12.799h0c0 7.069-5.73 12.799-12.799 12.799h0a12.8 12.8 0 0 1-12.68-11.053"></svg:path><svg:circle cx="11.201" cy="24" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.043" cy="11.67" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.797" cy="31.143" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.33 10.484l1.767-1.792M24 24l10.877-11.028"></svg:path>`,
})
export class ArcticonsTrackerDetectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
