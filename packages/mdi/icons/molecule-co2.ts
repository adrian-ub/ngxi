import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoleculeCo2Icon],svg[mdi-molecule-co2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-2H5V9h3V7zm6 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm5 1.5V12h3v1.5h-1.5A1.5 1.5 0 0 0 16 15v3h4.5v-1.5h-3V15H19a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class MdiMoleculeCo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
