import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpIcon],svg[ph-arrow-fat-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z"></svg:path>`,
})
export class PhArrowFatUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
