import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFolderOpenedIcon],svg[codicon-folder-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 14h11l.48-.37l2.63-7l-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11zM2 3h4.29l.86.85l.35.15H13v2H8.5l-.35.15l-.86.85H3.5l-.47.34l-1 3.08zm10.13 10H2.19l1.67-5H7.5l.35-.15l.86-.85h5.79z"></svg:path>`,
})
export class CodiconFolderOpenedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
