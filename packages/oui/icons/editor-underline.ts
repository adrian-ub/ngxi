import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorUnderlineIcon],svg[oui-editor-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.536V7.8c0 1.628 1.224 2.6 3 2.6c1.783 0 3-.972 3-2.6V3.536Q11 3 11.5 3t.5.536v4.318c0 2.093-1.665 3.546-4 3.546S4 9.893 4 7.8V3.536Q4 3 4.5 3t.5.536M2.5 13h11a.5.5 0 1 1 0 1h-11a.5.5 0 1 1 0-1"></svg:path>`,
})
export class OuiEditorUnderlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
