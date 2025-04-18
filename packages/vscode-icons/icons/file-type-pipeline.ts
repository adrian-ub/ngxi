import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePipelineIcon],svg[vscode-icons-file-type-pipeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f57f17" d="M20 23h-8.14a4.2 4.2 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28c.099.35.244.687.43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8zM8 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m16-4a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 26a2 2 0 1 1 0-4a2 2 0 0 1 0 4m14-4h4v4h-4z"></svg:path>`,
})
export class VscodeIconsFileTypePipelineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
