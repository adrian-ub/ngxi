import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTransitnowIcon],svg[arcticons-transitnow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.07" cy="35.78" r="2.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.64 9.98h22.72v4.63H12.64z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.92 4.5H16.08a7.58 7.58 0 0 0-7.58 7.58v19a3 3 0 0 0 .36 1.43l4.78 9a3.78 3.78 0 0 0 3.34 2H31a3.78 3.78 0 0 0 3.34-2l4.78-9a3 3 0 0 0 .36-1.43v-19a7.58 7.58 0 0 0-7.56-7.58"></svg:path><svg:circle cx="30.93" cy="35.78" r="2.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.36 14.61v9.76l-3.61 4.66h-15.5l-3.61-4.66v-9.76z"></svg:path>`,
})
export class ArcticonsTransitnowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
