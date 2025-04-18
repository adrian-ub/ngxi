import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRulerBoldIcon],svg[ph-ruler-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.15 70.54l-52.69-52.68a20 20 0 0 0-28.29 0L17.85 157.17a20 20 0 0 0 0 28.29l52.69 52.68a20 20 0 0 0 28.29 0L238.15 98.83a20 20 0 0 0 0-28.29M84.68 218.34l-47-47L64 145l23.52 23.52a12 12 0 0 0 17-17L81 128l15-15l23.51 23.52a12 12 0 0 0 17-17L113 96l15-15l23.52 23.52a12 12 0 0 0 17-17L145 64l26.35-26.34l47 47Z"></svg:path>`,
})
export class PhRulerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
