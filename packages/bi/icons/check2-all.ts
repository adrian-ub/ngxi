import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biCheck2AllIcon],svg[bi-check2-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293L1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7l-.896-.897l.707-.707l.543.543l6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"></svg:path><svg:path d="m5.354 7.146l.896.897l-.707.707l-.897-.896a.5.5 0 1 1 .708-.708"></svg:path></svg:g>`,
})
export class BiCheck2AllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
