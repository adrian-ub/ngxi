import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSensors2Icon],svg[tdesign-sensors-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.343 4.929l-.707.707A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364l.707.707l-1.414 1.414l-.707-.707A10.97 10.97 0 0 1 1 12c0-3.037 1.232-5.79 3.222-7.778l.707-.707zm12.728-1.414l.707.707A10.97 10.97 0 0 1 23 12c0 3.037-1.232 5.789-3.222 7.778l-.707.707l-1.414-1.414l.707-.707A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.636-6.364l-.707-.707zm-9.9 4.242l-.707.707A4.98 4.98 0 0 0 7 12c0 1.381.559 2.63 1.465 3.536l.707.707l-1.414 1.414l-.708-.707A6.98 6.98 0 0 1 5 12c0-1.933.785-3.684 2.05-4.95l.707-.707zm7.072-1.414l.707.707A6.98 6.98 0 0 1 19 12a6.98 6.98 0 0 1-2.05 4.95l-.707.707l-1.415-1.414l.707-.707A4.98 4.98 0 0 0 17 12a4.98 4.98 0 0 0-1.464-3.536l-.708-.707zM13 9v6h-2V9z"></svg:path>`,
})
export class TdesignSensors2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
