import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epDocumentCheckedIcon],svg[ep-document-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M805.504 320L640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m318.4 582.144l180.992-180.992L704.64 510.4L478.4 736.64L320 578.304l45.248-45.312z"></svg:path>`,
})
export class EpDocumentCheckedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
