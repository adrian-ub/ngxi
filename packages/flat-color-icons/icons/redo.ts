import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRedoIcon],svg[flat-color-icons-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#00BCD4"><svg:path d="M43 18L29 6.3v23.4z"></svg:path><svg:path d="M20 14h12v8H20c-2.8 0-5 2.2-5 5s2.2 5 5 5h3v8h-3c-7.2 0-13-5.8-13-13s5.8-13 13-13"></svg:path></svg:g>`,
})
export class FlatColorIconsRedoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
