import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBarbadosIcon],svg[openmoji-flag-barbados-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f1b31c" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h21v38H5zm41 0h21v38H46z"></svg:path><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.415 29.501L36 26.712l2.585 2.789l-.642.595l-1.504-1.629v16.821h-.878V28.467l-1.504 1.629zm8.085 9.711h-.797V31.9l-1.018 1.103l-.435-.403l2.25-2.388zm-11-9l2.25 2.388l-.435.403l-1.018-1.103v7.312H30.5z"></svg:path><svg:path d="M41.5 39.297h-11v-.594h11z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagBarbadosIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
