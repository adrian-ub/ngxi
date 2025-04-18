import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDownloadDoneIcon],svg[material-symbols-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.55 16l-5.675-5.675L5.3 8.9l4.25 4.25L18.7 4l1.425 1.425zM5 20v-2h14v2z"></svg:path>`,
})
export class MaterialSymbolsDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
