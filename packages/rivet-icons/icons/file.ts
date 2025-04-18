import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsFileIcon],svg[rivet-icons-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h8.414L14 4.586V15H2zm2 2v10h8V7.5H7.5V3zm5.5 0v2.5H12v-.086L9.586 3z"></svg:path>`,
})
export class RivetIconsFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
