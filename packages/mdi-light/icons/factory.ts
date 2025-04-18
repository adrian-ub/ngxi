import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFactoryIcon],svg[mdi-light-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 8l7 4.04V8l7 4V3h5v19H2zm15 6l-7-4.27v4.04L3 9.73V21h17V4h-3zM5 15h3v1H5zm0 3h5v1H5zm7-3h3v1h-3zm0 3h6v1h-6z"></svg:path>`,
})
export class MdiLightFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
