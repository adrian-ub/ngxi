import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDownloadDoneOutlineIcon],svg[material-symbols-download-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-2h14v2H5Zm4.55-4l-5.675-5.675L5.3 8.9l4.25 4.25L18.7 4l1.425 1.425L9.55 16Z"></svg:path>`,
})
export class MaterialSymbolsDownloadDoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
