import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSolarPanelIcon],svg[mdi-solar-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5v4h3v2h-5v-6h-2v6H6v-2h3v-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h7V4zm0 10h7v-4H4zm16 0v-4h-7v4zm0-10h-7v4h7z"></svg:path>`,
})
export class MdiSolarPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
