import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoubleArrowRoundedIcon],svg[material-symbols-light-double-arrow-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.742 12L7.656 6.287q-.177-.25-.04-.519t.44-.268q.12 0 .229.056q.109.057.169.157L12.962 12l-4.508 6.287q-.061.1-.17.157t-.232.056q-.292 0-.433-.268q-.14-.268.037-.518zm5.797 0l-4.087-5.713q-.177-.25-.04-.519t.44-.268q.12 0 .229.056q.109.057.169.157L18.758 12l-4.508 6.287q-.061.1-.17.157t-.232.056q-.292 0-.433-.268q-.14-.268.037-.518z"></svg:path>`,
})
export class MaterialSymbolsLightDoubleArrowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
