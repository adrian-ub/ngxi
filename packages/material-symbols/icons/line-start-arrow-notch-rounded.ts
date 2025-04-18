import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartArrowNotchRoundedIcon],svg[material-symbols-line-start-arrow-notch-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.575 13L12 17.25q.2.35-.075.613t-.625.062L3.325 12.85q-.475-.3-.475-.85t.475-.85L11.3 6.075q.35-.2.625.063T12 6.75L9.575 11H21q.425 0 .713.288T22 12t-.288.713T21 13z"></svg:path>`,
})
export class MaterialSymbolsLineStartArrowNotchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
