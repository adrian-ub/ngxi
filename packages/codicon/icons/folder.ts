import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFolderIcon],svg[codicon-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10zm-.51 8.49V13h-12V7h4.49l.35-.15l.86-.86H14v1.5zm0-6.49h-6.5l-.35.15l-.86.86H2v-3h4.29l.85.85l.36.15H14z"></svg:path>`,
})
export class CodiconFolderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
