import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNginxIcon],svg[file-icons-nginx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 236.329l-121.905 246.58h-262.65L0 259.048L126.892 29.09h273.731l72.59 170.112h-94.754l-37.126-75.359H182.857l-74.25 134.65l73.696 130.216h149.056l28.26-57.628H243.393c-24.13 0-47.746-18.68-47.746-46.822c0-26.166 26.087-47.931 47.746-47.931z"></svg:path>`,
})
export class FileIconsNginxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
