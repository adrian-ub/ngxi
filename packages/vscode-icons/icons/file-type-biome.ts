import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeBiomeIcon],svg[vscode-icons-file-type-biome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#60a5fa" d="M16 3.903L9.777 14.68a14.04 14.04 0 0 1 7.364-.255l2.103.496l-1.979 8.39l-2.106-.496c-2.588-.61-5.076.749-6.127 2.918l-1.947-.942c1.486-3.068 4.987-4.926 8.572-4.08l.986-4.182A11.887 11.887 0 0 0 2.032 28.097H29.97z"></svg:path>`,
})
export class VscodeIconsFileTypeBiomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
