import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridNoneIcon],svg[ix-editor-grid-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666z"></svg:path>`,
})
export class IxEditorGridNoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
