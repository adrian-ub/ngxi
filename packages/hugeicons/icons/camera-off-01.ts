import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCameraOff01Icon],svg[hugeicons-camera-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 6c-.64.026-1.033.09-1.419.25a3.5 3.5 0 0 0-1.803 1.697c-.306.626-.356 1.428-.456 3.032l-.157 2.513c-.249 3.989-.373 5.983.81 7.246C4.16 22 6.156 22 10.146 22h3.965c3.693 0 5.676 0 6.89-1.001M17 7l-.41-1M8 4c.313-.728.677-1.385 1.41-1.74C9.948 2 10.594 2 11.885 2c1.29 0 1.936 0 2.473.26c.997.482 1.342 1.562 1.737 2.525L16.59 6m5.405 11.5c.023-1.054-.058-2.357-.16-4l-.154-2.51c-.099-1.602-.148-2.403-.45-3.028a3.47 3.47 0 0 0-1.78-1.696C18.895 6.033 18.22 6.004 17 6h-.41"></svg:path><svg:path d="M10.5 10.837a3.5 3.5 0 1 0 4.663 4.663M2 2l20 20M12 6h.009"></svg:path></svg:g>`,
})
export class HugeiconsCameraOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
