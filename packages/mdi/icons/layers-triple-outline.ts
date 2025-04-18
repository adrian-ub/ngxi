import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersTripleOutlineIcon],svg[mdi-layers-triple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.54l7.37-5.74L21 12.07l-9 7l-9-7l1.62-1.26zM12 14L3 7l9-7l9 7zm0-11.47L6.26 7L12 11.47L17.74 7zm0 18.94l7.37-5.74L21 17l-9 7l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersTripleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
