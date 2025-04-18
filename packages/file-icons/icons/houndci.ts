import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsHoundciIcon],svg[file-icons-houndci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h512v224.92C490 114 348 36 358.361 75.615c9.933 23.588 9.933 85.033 9.933 85.033l-100.01 38.146l-15 55.482l-122.398 32.27s8.722 62.43 43.903 73.341c22.566 6.999 170.482 23.316 170.482 23.316l-28.08 123.778H0z"></svg:path>`,
})
export class FileIconsHoundciIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
