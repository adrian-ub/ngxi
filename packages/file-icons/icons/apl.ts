import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAplIcon],svg[file-icons-apl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480.48 480.465L240.24 0L0 480.465h208.705V512h63.07v-31.535zm-208.705-63.07V204.088l106.647 213.305zm-169.717 0l106.647-213.306v213.305z"></svg:path>`,
})
export class FileIconsAplIcon {
  readonly viewBox = input("0 0 481 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
