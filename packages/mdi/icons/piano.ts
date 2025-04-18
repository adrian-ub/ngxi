import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPianoIcon],svg[mdi-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-5.26 12H15v6H9v-6h.31c.55 0 .99-.44.99-1V4h3.45v9c0 .56.44 1 .99 1M4 4h2.8v9c0 .56.44 1 .99 1H8v6H4zm16 16h-4v-6h.26c.55 0 .99-.44.99-1V4H20z"></svg:path>`,
})
export class MdiPianoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
