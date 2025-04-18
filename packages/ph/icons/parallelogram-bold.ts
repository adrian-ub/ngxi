import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParallelogramBoldIcon],svg[ph-parallelogram-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.78 45.14A19.92 19.92 0 0 0 232 36H88.81a20 20 0 0 0-18.24 11.79l-64.8 144A20 20 0 0 0 24 220h143.19a20 20 0 0 0 18.24-11.79l64.8-144a19.9 19.9 0 0 0-1.45-19.07M164.6 196H30.2L91.4 60h134.4Z"></svg:path>`,
})
export class PhParallelogramBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
