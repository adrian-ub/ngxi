import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFoldingStoolIcon],svg[pepicons-pencil-folding-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m2-9.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M6 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M14 1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5m1.413 16.782a.5.5 0 0 1-.695.13l-9.5-6.5a.5.5 0 0 1 .564-.825l9.5 6.5a.5.5 0 0 1 .13.695"></svg:path><svg:path d="M4.587 18.282a.5.5 0 0 0 .695.13l9.5-6.5a.5.5 0 0 0-.564-.825l-9.5 6.5a.5.5 0 0 0-.13.695M14 4H6V3h8zm0 3H6V6h8zM2.5 8a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m11 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilFoldingStoolIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
