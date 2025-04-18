import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransferLeftIcon],svg[mdi-transfer-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16h-2V8h2zm-4 0h-2V8h2zm-4 0h-2V8h2zM9 5v14l-7-7z"></svg:path>`,
})
export class MdiTransferLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
