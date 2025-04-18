import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsYasmIcon],svg[file-icons-yasm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m460.046 461.888l-39.82-63.309a8.4 8.4 0 0 0-2.24-2.374l-11.04-367.228C399.556-95.911-95.62 219.957 16.523 275.084l330.28 164.743l41.943 66.906c10.934 20.33 85.184-23.255 71.3-44.845"></svg:path>`,
})
export class FileIconsYasmIcon {
  readonly viewBox = input("0 0 462 512")
  readonly width = input("0.91em")
  readonly height = input("1em")
}
