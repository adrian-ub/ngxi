import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftIcon],svg[ph-arrow-fat-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 72h-80V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h80a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 96h-88a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h88Z"></svg:path>`,
})
export class PhArrowFatLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
