import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeFlashIcon],svg[file-icons-adobe-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm263.646 217.244v42.637h-88.554v102.766H123.71V105.73h145.403l5.467 43.73h-99.487v67.783zm126.833 143.415c-38.333 15.153-68.029 3.037-68.875-40.693V105.731h51.383v209.964c-.723 12.176 3.223 14.06 17.492 12.509z"></svg:path>`,
})
export class FileIconsAdobeFlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
