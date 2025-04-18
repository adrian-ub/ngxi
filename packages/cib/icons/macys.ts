import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMacysIcon],svg[cib-macys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.021.833L12.255 12.39H0l9.927 7.177l-3.76 11.568L16 23.979l9.896 7.193l-3.781-11.62L32 12.391H19.786L16.02.828z"></svg:path>`,
})
export class CibMacysIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
