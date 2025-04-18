import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagStKittsAndNevisIcon],svg[openmoji-flag-st-kitts-and-nevis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17v38l62-38z"></svg:path><svg:path stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 24v-7h-8L5 48v7h8z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m44.799 33.5l-1.019-5l3.72 3.405l-5-.509l4.37-2.581zm-19 11l-1.019-5l3.72 3.405l-5-.509l4.37-2.581z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagStKittsAndNevisIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
