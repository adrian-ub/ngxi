import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagTimorLesteIcon],svg[openmoji-flag-timor-leste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5.49 17H67v38H5V17.49c0-.27.22-.49.49-.49"></svg:path><svg:path fill="#f1b31c" d="M38 36L6.652 54.049A1.102 1.102 0 0 1 5 53.093V18.896c0-.843.913-1.37 1.644-.95z"></svg:path><svg:path d="M26 36L6.073 54.03A.642.642 0 0 1 5 53.552V18.617c0-.622.738-.95 1.2-.532z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m15.35 34.05l-4.63 2.44l5.04.67l-3.53-3.53l.67 5.04z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagTimorLesteIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
