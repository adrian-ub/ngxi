import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobiledataOffIcon],svg[material-symbols-mobiledata-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 22.6L10 12.8v4.35l1.55-1.55L13 17l-4 4l-4-4l1.45-1.4L8 17.15V10.8L1.4 4.2l1.4-1.4l18.4 18.4zM16 13.15l-2-2V6.8l-1.6 1.6L11 7l4-4l4 4l-1.4 1.4L16 6.8z"></svg:path>`,
})
export class MaterialSymbolsMobiledataOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
