import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickBottomIcon],svg[cil-arrow-thick-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.682 494.636L16 254.3v-38.276l143.937-.007V16h192v200.007L495.952 216l-.035 38.688ZM54.931 248.022l200.8 201.342L457.328 248l-137.391.008V48h-128v200.015Z"></svg:path>`,
})
export class CilArrowThickBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
