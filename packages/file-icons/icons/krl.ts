import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsKrlIcon],svg[file-icons-krl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm11.152 494.296l170.55-252.647L20.672 16.964h96.02L276.68 240.205l-171.524 254.09zm394.346 0l-139.505-206.66l33.316-47.73l-33.494-43.954L393.962 16.964h96.018L328.952 241.649l170.549 252.647z"></svg:path>`,
})
export class FileIconsKrlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
