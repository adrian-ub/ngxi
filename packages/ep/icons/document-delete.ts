import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epDocumentDeleteIcon],svg[ep-document-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M805.504 320L640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m308.992 546.304l-90.496-90.624l45.248-45.248l90.56 90.496l90.496-90.432l45.248 45.248l-90.496 90.56l90.496 90.496l-45.248 45.248l-90.496-90.496l-90.56 90.496l-45.248-45.248z"></svg:path>`,
})
export class EpDocumentDeleteIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
