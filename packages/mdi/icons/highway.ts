import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHighwayIcon],svg[mdi-highway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2L8 8h3V2zm3 0v6h3l-2-6zM2 9v1h2v1h2v-1h12l.06 1H20v-1h2V9zm5 2L3.34 22H11V11zm6 0v11h7.66L17 11z"></svg:path>`,
})
export class MdiHighwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
