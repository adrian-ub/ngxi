import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagAntiguaAndBarbudaIcon],svg[openmoji-flag-antigua-and-barbuda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path d="M5 17h62v13H5z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M35.61 28.038L36 20l.39 8.038l3.437-7.277l-2.716 7.576l5.96-5.408l-5.408 5.96l7.576-2.716l-7.277 3.437L46 30l-8.038.39l7.277 3.437l-7.576-2.716l5.408 5.96l-5.96-5.408l2.716 7.576l-3.437-7.277L36 40l-.39-8.038l-3.437 7.277l2.716-7.576l-5.96 5.408l5.408-5.96l-7.576 2.716l7.277-3.437L26 30l8.038-.39l-7.277-3.437l7.576 2.716l-5.408-5.96l5.96 5.408l-2.716-7.576z"></svg:path><svg:path fill="#1e50a0" d="M5 30h62v12H5z"></svg:path><svg:path fill="#d22f27" d="M5 55h31L5 17zm31 0h31V17z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagAntiguaAndBarbudaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
