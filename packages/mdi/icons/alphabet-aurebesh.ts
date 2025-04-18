import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphabetAurebeshIcon],svg[mdi-alphabet-aurebesh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v7h11.23L22 4h-3l-5.54 5H5V4zm0 9v7h2v-5h8.46L19 20h3l-7.77-7z"></svg:path>`,
})
export class MdiAlphabetAurebeshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
