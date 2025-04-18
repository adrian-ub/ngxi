import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFilePowerpointIcon],svg[la-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM13 13v2h4c1.2 0 2 .8 2 2s-.8 2-2 2s-2-.8-2-2h-2v7h2v-3.6c.6.4 1.3.6 2 .6c2.2 0 4-1.8 4-4s-1.8-4-4-4z"></svg:path>`,
})
export class LaFilePowerpointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
