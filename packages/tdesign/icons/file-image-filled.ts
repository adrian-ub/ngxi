import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileImageFilledIcon],svg[tdesign-file-image-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm7.004 10H8v2.004h2.004zm5.372 7.414L16.79 17l-4.062-4.062l-1.476 1.476l-.628-.756l-2.262 2.188L7.208 17l1.414 1.414l1.143-1.142l.7-.677l.651.784l1.612-1.613z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFileImageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
