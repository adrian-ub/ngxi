import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSlIcon],svg[cif-sl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1EB53A" d="M.5.5h300v66.667H.5z"></svg:path><svg:path fill="#FFF" d="M.5 67.167h300v66.667H.5z"></svg:path><svg:path fill="#0072C6" d="M.5 133.833h300V200.5H.5z"></svg:path></svg:g>`,
})
export class CifSlIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
