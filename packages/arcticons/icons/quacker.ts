import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuackerIcon],svg[arcticons-quacker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.89 23.364c9.315-.674 8.944 4.081 12.85 3.647c2.02-.224 3.76-1.823 3.76-1.823c0 8.782-5.718 16.187-11.728 16.47c-3.871.182-9.933.168-13.3 0s-8.418-2.706-8.418-9.07s4.265-6.026 4.265-10.29c0-.767-.28-1.235-.28-1.235c-3.76.28-7.09-1.029-7.539-6.06c2.544.934 5.462 0 5.462 0C10.72 9.97 15.377 6.21 20.39 6.21s9.184 4.49 9.184 9.372s-3.685 7.782-3.685 7.782Z"></svg:path><svg:circle cx="17.472" cy="14.722" r="2.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsQuackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
