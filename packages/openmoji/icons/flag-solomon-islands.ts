import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSolomonIslandsIcon],svg[openmoji-flag-solomon-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17v38l62-38z"></svg:path><svg:path fill="#fcea2b" d="M67 21v-4h-5L5 51v4h5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m9.384 25.5l1.66-5l1.431 4.923L8.5 22.457l5-.124zm12 0l1.66-5l1.431 4.923l-3.975-2.966l5-.124zm-12 10l1.66-5l1.431 4.923L8.5 32.457l5-.124zm6-5l1.66-5l1.431 4.923l-3.975-2.966l5-.124zm6 5l1.66-5l1.431 4.923l-3.975-2.966l5-.124z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSolomonIslandsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
