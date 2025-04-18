import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeOpenTextIcon],svg[la-envelope-open-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v1.9l-5.992 3.903V27h23.984V10.803L22 6.898V5zm2 2h8v7.682l-4 2.591l-4-2.591zm1 2v2h6V9zm-3 .285v4.102l-3.156-2.045zm12 0l3.156 2.057L22 13.387zM13 12v2h6v-2zm-6.992 1.184L16 19.656l9.992-6.472V25H6.008z"></svg:path>`,
})
export class LaEnvelopeOpenTextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
