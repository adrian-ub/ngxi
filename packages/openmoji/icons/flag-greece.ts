import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGreeceIcon],svg[openmoji-flag-greece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 34h62v4H5zm0-8.25h62v4H5zm0 16.5h62v4H5zM5 50h62v5H5zm0-33h62v5H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h22v21H5z"></svg:path><svg:path fill="#fff" d="M14.5 17h4v22h-4z"></svg:path><svg:path fill="#fff" d="M5 25.75h22v4H5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGreeceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
