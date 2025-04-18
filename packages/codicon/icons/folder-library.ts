import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFolderLibraryIcon],svg[codicon-folder-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.71 3h6.79l.51.5V7H14V5.99H7.69l-.86.86l-.35.15H1.99v6H7v1H1.51l-.5-.5v-11l.5-.5h5l.35.15zm-.22 2h6.5l.01-.99H7.5l-.36-.15l-.85-.85H2v3h4.28l.86-.86z" clip-rule="evenodd"></svg:path><svg:path d="M8 8h1v6H8zm2 0h1v6h-1zm2.004.352l.94-.342l2.052 5.638l-.94.342z"></svg:path></svg:g>`,
})
export class CodiconFolderLibraryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
