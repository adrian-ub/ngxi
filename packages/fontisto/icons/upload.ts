import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoUploadIcon],svg[fontisto-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 17.143V24h24v-6.857zm5.143 5.143H1.714v-1.714h3.429zm12-17.143h-3.429v8.571h-3.429V5.143H6.856L11.999 0z"></svg:path>`,
})
export class FontistoUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
