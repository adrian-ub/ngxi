import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLineWeightIcon],svg[cil-line-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 464h480v32H16zm0-32h480v-80H16Zm32-48h416v16H48Zm-32-64h480V208H16Zm32-80h416v48H48Zm-32-64h480V16H16ZM48 48h416v96H48Z"></svg:path>`,
})
export class CilLineWeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
