import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsDocletsIcon],svg[file-icons-doclets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M284.591 3.086H0v462.303c28.42-178.657 121.8-234.532 262.467-244.083C278.935 408.85 156.385 491.001 26.412 508.914h258.179c298.67-32.18 307.72-467.614 0-505.828"></svg:path>`,
})
export class FileIconsDocletsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
