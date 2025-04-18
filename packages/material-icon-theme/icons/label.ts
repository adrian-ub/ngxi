import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLabelIcon],svg[material-icon-theme-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffb300" d="m14.709 8.558l-7.27-7.247a1 1 0 0 0-.893-.297l-4 .731c-.399.074-.714.38-.8.777l-.732 4.024c-.055.328.057.662.297.892l7.247 7.27c.393.39 1.025.39 1.417 0l4.734-4.733a1.006 1.006 0 0 0 0-1.417m-8.981-2.8c-1.434 1.554-3.65-.764-2.117-2.214c1.411-1.378 3.467.704 2.15 2.178z"></svg:path>`,
})
export class MaterialIconThemeLabelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
