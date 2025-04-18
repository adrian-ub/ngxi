import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconZoomInIcon],svg[codicon-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.027 6.149a5.52 5.52 0 0 1-1.27 3.908l4.26 4.26l-.7.71l-4.26-4.27a5.52 5.52 0 1 1 1.97-4.608m-5.45 4.888a4.5 4.5 0 0 0 3.18-1.32l-.04.02a4.5 4.5 0 0 0 1.36-3.2a4.5 4.5 0 1 0-4.5 4.5m2.44-4v-1h-2v-2h-1v2h-2v1h2v2h1v-2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconZoomInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
