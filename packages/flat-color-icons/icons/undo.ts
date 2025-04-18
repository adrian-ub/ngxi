import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsUndoIcon],svg[flat-color-icons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#00BCD4"><svg:path d="M5 18L19 6.3v23.4z"></svg:path><svg:path d="M28 14H16v8h12c2.8 0 5 2.2 5 5s-2.2 5-5 5h-3v8h3c7.2 0 13-5.8 13-13s-5.8-13-13-13"></svg:path></svg:g>`,
})
export class FlatColorIconsUndoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
