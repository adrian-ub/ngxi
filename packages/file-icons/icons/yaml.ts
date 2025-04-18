import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsYamlIcon],svg[file-icons-yaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.016 0H457L114.983 512H0l171.008-256L0 0h114.983L228.5 169.934z"></svg:path>`,
})
export class FileIconsYamlIcon {
  readonly viewBox = input("0 0 457 512")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
