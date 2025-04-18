import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpBoldIcon],svg[ph-arrow-fat-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.48 111.51l-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v76a20 20 0 0 0 20 20h80a20 20 0 0 0 20-20v-76h36a12 12 0 0 0 8.48-20.49M176 108a12 12 0 0 0-12 12v84H92v-84a12 12 0 0 0-12-12H61l67-67l67 67Z"></svg:path>`,
})
export class PhArrowFatUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
