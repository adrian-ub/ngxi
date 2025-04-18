import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownThinIcon],svg[ph-arrow-fat-lines-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.7 134.47A4 4 0 0 0 224 132h-44v-28a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v28H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36M128 226.34L41.66 140H80a4 4 0 0 0 4-4v-28h88v28a4 4 0 0 0 4 4h38.34ZM76 40a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhArrowFatLinesDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
