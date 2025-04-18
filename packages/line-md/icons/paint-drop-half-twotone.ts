import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPaintDropHalfTwotoneIcon],svg[line-md-paint-drop-half-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c0 0 7 6 7 12c0 2 -1 6 -7 6M12 3c0 0 -7 6 -7 12c0 2 1 6 7 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" d="M12 3C12 3 15.27 5.81 17.34 9.5L6 18.41C5.21 17.24 5 15.91 5 15C5 9 12 3 12 3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdPaintDropHalfTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
