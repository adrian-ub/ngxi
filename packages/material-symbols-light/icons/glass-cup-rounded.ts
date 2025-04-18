import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGlassCupRoundedIcon],svg[material-symbols-light-glass-cup-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.475 21q-.621 0-1.087-.404q-.467-.404-.522-1.025L4.14 4.283q-.068-.52.29-.901T5.308 3h13.384q.52 0 .877.382t.29.9l-1.705 15.29q-.056.62-.522 1.024T16.544 21zm-.938-4.5h10.952L18.866 4H5.116z"></svg:path>`,
})
export class MaterialSymbolsLightGlassCupRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
