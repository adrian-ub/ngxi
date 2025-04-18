import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFileIcon],svg[oi-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h7V4H3V0zm4 0v3h3z"></svg:path>`,
})
export class OiFileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
