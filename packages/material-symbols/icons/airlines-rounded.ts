import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlinesRoundedIcon],svg[material-symbols-airlines-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.55 19.225l9.85-14.35q.275-.425.713-.65T14.05 4h5.55q.95 0 1.538.725t.412 1.65l-2.4 12.8q-.075.35-.35.588t-.625.237H2.95q-.3 0-.438-.262t.038-.513M14.5 14q1.05 0 1.775-.725T17 11.5t-.725-1.775T14.5 9t-1.775.725T12 11.5t.725 1.775T14.5 14"></svg:path>`,
})
export class MaterialSymbolsAirlinesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
