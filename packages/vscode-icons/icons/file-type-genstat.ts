import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeGenstatIcon],svg[vscode-icons-file-type-genstat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e2e2e2" d="M2 5.861h28v20H2z"></svg:path><svg:path fill="#6cc1ee" d="M2 2h28v21.613c-9.333.915-12.5-17.32-17.956-17.32C7.455 6.293 5.7 16.57 2 17.787Z"></svg:path><svg:path fill="#46b270" d="M2 30h28v-4.639C20.382 26.388 15.526 8.083 11.959 8.042c-3.167 0-4.9 10.382-9.959 11.494Z"></svg:path>`,
})
export class VscodeIconsFileTypeGenstatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
