import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBuildingIcon],svg[cil-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 464V16H72v448H16v32h480v-32Zm-32 0H272v-64h-32v64H104V48h304Z"></svg:path><svg:path fill="currentColor" d="M160 304h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32zm-160-96h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32zm-160-96h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32z"></svg:path>`,
})
export class CilBuildingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
