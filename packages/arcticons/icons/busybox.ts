import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBusyboxIcon],svg[arcticons-busybox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.06 25.13v13.06l12.17 3.41V19.89l15.6-3.41l-11.5-3.54l-16.38 3.54l-2.2 7.83l2.2.78l9.97 3.53l2.31-8.73m0 21.71l15.78-3.43V24.74"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.95 16.48l12.28 3.41l6.7 7.15L43.5 23.1l-6.67-6.62l5.95-5.52l-11.53-3.38l-5.92 5.36l-4.26-6.54L4.5 9.91zM23.8 36.5l10.41-1.97m-17.53-4.95L15 36.87m-.64-7.84l-1.74 7.18m-1.46-2.98L17.64 35m-5.66-4.44l6.22 1.83"></svg:path>`,
})
export class ArcticonsBusyboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
