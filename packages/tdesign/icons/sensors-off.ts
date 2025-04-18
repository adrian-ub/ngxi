import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSensorsOffIcon],svg[tdesign-sensors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.219 4.317A11.96 11.96 0 0 1 24 12c0 2.953-1.068 5.659-2.837 7.749l1.251 1.25L21 22.415l-8.482-8.482a2 2 0 0 1-2.45-2.45l-2.24-2.24A4.97 4.97 0 0 0 7 12c0 1.219.435 2.333 1.158 3.2l.641.768l-1.536 1.282l-.64-.768A6.98 6.98 0 0 1 5 12a6.97 6.97 0 0 1 1.394-4.192L4.257 5.67A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 2.317 6.4l.64.768l-1.535 1.282l-.64-.768A11.96 11.96 0 0 1 0 12a11.96 11.96 0 0 1 2.836-7.75L1.586 3L3 1.586l8.482 8.482Q11.73 10 12 10a2 2 0 0 1 1.932 2.518l2.24 2.24A5 5 0 0 0 17 12a4.98 4.98 0 0 0-1.158-3.2l-.642-.77l1.536-1.28l.64.767A6.98 6.98 0 0 1 19 12a6.97 6.97 0 0 1-1.394 4.192l2.137 2.137A9.96 9.96 0 0 0 22 11.999c0-2.435-.87-4.666-2.317-6.4l-.64-.769l1.535-1.28z"></svg:path>`,
})
export class TdesignSensorsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
