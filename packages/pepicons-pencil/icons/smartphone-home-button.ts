import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSmartphoneHomeButtonIcon],svg[pepicons-pencil-smartphone-home-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.5.5h-9A1.5 1.5 0 0 0 4 2v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 16 18V2A1.5 1.5 0 0 0 14.5.5M5 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 18z" clip-rule="evenodd"></svg:path><svg:path d="M10 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path></svg:g>`,
})
export class PepiconsPencilSmartphoneHomeButtonIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
