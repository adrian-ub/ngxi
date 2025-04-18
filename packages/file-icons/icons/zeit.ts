import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsZeitIcon],svg[file-icons-zeit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 30l256 452H0z"></svg:path>`,
})
export class FileIconsZeitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
