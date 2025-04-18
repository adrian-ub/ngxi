import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagPhilippinesIcon],svg[openmoji-flag-philippines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 36h62v19H5z"></svg:path><svg:path fill="#fff" d="M37 36L5 55V17z"></svg:path><svg:circle cx="8" cy="21" r="1.044" fill="#f1b31c"></svg:circle><svg:circle cx="33" cy="36" r="1.044" fill="#f1b31c"></svg:circle><svg:circle cx="8" cy="51" r="1.044" fill="#f1b31c"></svg:circle><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m17.907 35.086l2.133-1.496l-1.606 2.052l2.566.45l-2.586.315l1.496 2.133l-2.051-1.606l-.451 2.566l-.315-2.586l-2.133 1.496l1.606-2.051L14 35.908l2.586-.315l-1.496-2.133l2.052 1.606l.45-2.566z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagPhilippinesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
