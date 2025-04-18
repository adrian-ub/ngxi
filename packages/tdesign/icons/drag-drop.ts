import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDragDropIcon],svg[tdesign-drag-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.999 15V2h13v5h-2V4h-9v9h3v2zm6 5V8h12v5.5h-2V10h-8v8h3.5v2zm8.778 3.684L13.41 13.378l10.258 3.407l-4.656 2.227z"></svg:path>`,
})
export class TdesignDragDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
