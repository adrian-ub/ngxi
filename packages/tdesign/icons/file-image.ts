import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileImageIcon],svg[tdesign-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V9h-6V3zm10 .414V7h3.586zM8 11h2.004v2.004H8zm4.728 1.938L16.79 17l-1.414 1.414l-2.648-2.648l-1.612 1.613l-.652-.784l-.7.677l-1.142 1.142L7.208 17l1.154-1.154l2.262-2.188l.628.756z"></svg:path>`,
})
export class TdesignFileImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
