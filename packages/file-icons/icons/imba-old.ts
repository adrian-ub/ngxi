import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsImbaOldIcon],svg[file-icons-imba-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0H192L0 192v128l192 192h128l192-192V192zm-64.002 346.75L165.25 256L256 165.25L346.75 256z"></svg:path>`,
})
export class FileIconsImbaOldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
