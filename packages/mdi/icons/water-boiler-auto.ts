import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaterBoilerAutoIcon],svg[mdi-water-boiler-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h1v2H2v2h3c1.11 0 2-.89 2-2v-2h2v2c0 1.11.89 2 2 2h2l.75-2H11v-2h1c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4 2.97a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 4.97M6 14.5h4V16H6zM19.8 13h-2l-3.2 9h1.9l.7-2h3.2l.7 2H23zm-2.2 5.7l1.2-3.7l1.2 3.7z"></svg:path>`,
})
export class MdiWaterBoilerAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
