import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDownloadIcon],svg[fontisto-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 17.143V24h24v-6.857zm5.143 5.143H1.714v-1.714h3.429zM6.857 8.571h3.429V0h3.429v8.571h3.429l-5.143 5.143z"></svg:path>`,
})
export class FontistoDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
