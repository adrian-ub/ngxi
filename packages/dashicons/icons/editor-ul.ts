import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorUlIcon],svg[dashicons-editor-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7C4.67 7 4 6.33 4 5.5C4 4.68 4.67 4 5.5 4C6.32 4 7 4.68 7 5.5C7 6.33 6.32 7 5.5 7M8 5h9v1H8zm-2.5 7c-.83 0-1.5-.67-1.5-1.5C4 9.68 4.67 9 5.5 9c.82 0 1.5.68 1.5 1.5c0 .83-.68 1.5-1.5 1.5M8 10h9v1H8zm-2.5 7c-.83 0-1.5-.67-1.5-1.5c0-.82.67-1.5 1.5-1.5c.82 0 1.5.68 1.5 1.5c0 .83-.68 1.5-1.5 1.5M8 15h9v1H8z"></svg:path>`,
})
export class DashiconsEditorUlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
