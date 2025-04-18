import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSensors1Icon],svg[tdesign-sensors-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.636 4.223l-.707.707A9.97 9.97 0 0 0 2 12a9.97 9.97 0 0 0 2.929 7.072l.707.707l-1.414 1.414l-.707-.707A11.97 11.97 0 0 1 0 12.001c0-3.314 1.344-6.315 3.515-8.486l.707-.707zm14.141-1.415l.707.707A11.97 11.97 0 0 1 24 12.001c0 3.313-1.344 6.315-3.514 8.485l-.708.707l-1.414-1.414l.707-.707A9.97 9.97 0 0 0 22 12a9.97 9.97 0 0 0-2.93-7.071l-.707-.707zM8.464 7.051l-.707.707A5.98 5.98 0 0 0 6 12c0 1.658.67 3.156 1.757 4.243l.707.707l-1.414 1.414l-.707-.707A7.98 7.98 0 0 1 4 12c0-2.208.897-4.21 2.343-5.656l.707-.708zm8.485-1.415l.707.708A7.98 7.98 0 0 1 20 12c0 2.21-.897 4.21-2.344 5.657l-.707.707l-1.414-1.414l.707-.707A5.98 5.98 0 0 0 18 12a5.98 5.98 0 0 0-1.758-4.242l-.707-.707zM12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 5 3.874v4.905h-2v-4.905A4 4 0 0 1 8 12"></svg:path>`,
})
export class TdesignSensors1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
