import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoleculeCoIcon],svg[mdi-molecule-co-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h3v-2H8V9h3V7zm6 0c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiMoleculeCoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
