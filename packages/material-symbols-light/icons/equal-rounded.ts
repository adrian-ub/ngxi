import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEqualRoundedIcon],svg[material-symbols-light-equal-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16q-.417 0-.708-.291Q5 15.418 5 15.002t.292-.709T6 14h12q.417 0 .708.291q.292.291.292.707t-.292.709T18 16zm0-6q-.417 0-.708-.291Q5 9.418 5 9.002t.292-.709T6 8h12q.417 0 .708.291q.292.291.292.707t-.292.709T18 10z"></svg:path>`,
})
export class MaterialSymbolsLightEqualRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
