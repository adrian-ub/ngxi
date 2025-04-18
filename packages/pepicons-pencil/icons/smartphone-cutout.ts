import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSmartphoneCutoutIcon],svg[pepicons-pencil-smartphone-cutout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 2A1.5 1.5 0 0 1 5.5.5h9A1.5 1.5 0 0 1 16 2v16a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 18zm1.5-.5A.5.5 0 0 0 5 2v16a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M7.5 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class PepiconsPencilSmartphoneCutoutIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
