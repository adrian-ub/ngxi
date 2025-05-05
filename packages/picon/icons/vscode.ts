import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVscodeIcon],svg[picon-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2L0 7V6l6-6l2 1v6L6 8L0 2V1l6 5"></svg:path>`,
})
export class PiconVscodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
