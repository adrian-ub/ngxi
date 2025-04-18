import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLoaderIcon],svg[pixelarticons-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v6h2zm0 14h-2v6h2zm9-5v2h-6v-2zM8 13v-2H2v2zm7-6h2v2h-2zm4-2h-2v2h2zM9 7H7v2h2zM5 5h2v2H5zm10 12h2v2h2v-2h-2v-2h-2zm-8 0v-2h2v2zv2H5v-2z"></svg:path>`,
})
export class PixelarticonsLoaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
