import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFunctionCurveIcon],svg[tdesign-function-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v13h8.79q.177-.387.34-.8c1.193-3.015 1.741-6.74 1.871-9.252l.052-.998l1.997.103l-.051.999c-.137 2.64-.709 6.598-2.01 9.884l-.025.064H22v2h-3.985c-.476.843-1.029 1.61-1.67 2.243c-1.16 1.143-2.63 1.86-4.41 1.745c-1.57-.102-2.867-.773-3.935-1.766V22H6v-5H2v-2h3.203q-.1-.228-.19-.457c-1.3-3.227-1.874-6.997-2.011-9.488l-.055-.998l1.996-.11l.055.998A32 32 0 0 0 6 11.165V2zm.66 15c.958 1.188 2.09 1.907 3.405 1.992c1.1.072 2.036-.346 2.875-1.174q.367-.362.702-.818z"></svg:path>`,
})
export class TdesignFunctionCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
