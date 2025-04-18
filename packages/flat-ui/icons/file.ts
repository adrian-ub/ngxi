import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiFileIcon],svg[flat-ui-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F1C40F" d="M0 100V0h72l28 28v72z"></svg:path><svg:path fill="#F39C12" d="M0 100V72L72 0l28 28l-72 72z"></svg:path><svg:path fill="#FFF55B" d="M72 0h1l27 27v1H72z"></svg:path><svg:path fill="#fff" d="M34.828 55.721v3.853H23.29v7.704h9.738v3.87H23.29V81.75h-4.878V55.721zm9.252 26.028h-4.86V55.721h4.86zm10.691-3.996h10.422v3.996H49.93V55.721h4.842zm30.187-22.032v3.853H73.42v7.218h9.09v3.726h-9.09v7.362h11.538v3.87H68.542V55.721z"></svg:path>`,
})
export class FlatUiFileIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
