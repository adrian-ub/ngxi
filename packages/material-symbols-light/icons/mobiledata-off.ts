import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobiledataOffIcon],svg[material-symbols-light-mobiledata-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.685 21.1L9.5 10.916v7.157l2.089-2.089l.719.708L9 20l-3.308-3.308l.72-.707L8.5 18.073V9.915L2.861 4.278l.708-.708l16.823 16.823zM15.5 12.65l-1-1V5.916l-2.1 2.1l-.708-.708L15 4l3.308 3.308l-.708.708l-2.1-2.1z"></svg:path>`,
})
export class MaterialSymbolsLightMobiledataOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
