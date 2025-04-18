import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPauseOutlineIcon],svg[material-symbols-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19V5h6v14zm-8 0V5h6v14zm10-2h2V7h-2zm-8 0h2V7H7zM7 7v10zm8 0v10z"></svg:path>`,
})
export class MaterialSymbolsPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
