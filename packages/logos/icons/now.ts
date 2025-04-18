import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNowIcon],svg[logos-now-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128.1 0L0 232.153h256L128.1 0zm-10.876 46.875l93.256 171.943H22.559l94.665-171.943z" fill="#000"></svg:path>`,
})
export class LogosNowIcon {
  readonly viewBox = input("0 0 256 233")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
