import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAmdIcon],svg[file-icons-amd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 512L369.628 369.736V142.264H142.085L0 0h512zM142.085 369.736V165.004L0 307.226V512h204.651l142.22-142.264z"></svg:path>`,
})
export class FileIconsAmdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
