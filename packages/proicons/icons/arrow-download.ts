import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowDownloadIcon],svg[proicons-arrow-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.074 3.25v12.478M6.19 10.465l4.822 4.822c.293.293.677.44 1.06.44m5.883-5.262l-4.822 4.822c-.293.293-.677.44-1.06.44m8.677.788v.935a3.3 3.3 0 0 1-3.3 3.3H6.55a3.3 3.3 0 0 1-3.3-3.3v-.935"></svg:path>`,
})
export class ProiconsArrowDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
