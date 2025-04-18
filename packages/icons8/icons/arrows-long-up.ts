import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ArrowsLongUpIcon],svg[icons8-arrows-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.094l-.72.718l-6 6l1.44 1.407L15 7.936V28h2V7.937l4.28 4.282l1.44-1.408l-6-6z"></svg:path>`,
})
export class Icons8ArrowsLongUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
