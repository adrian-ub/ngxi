import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsKiboIcon],svg[file-icons-kibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 204.546L204.44 0H512L0 512zM.236 512h509.968L316.933 316.201z"></svg:path>`,
})
export class FileIconsKiboIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
