import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsBoldIcon],svg[ph-not-equals-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160a12 12 0 0 1-12 12H104.22l-47.34 52.07a12 12 0 0 1-17.76-16.14L71.78 172H40a12 12 0 0 1 0-24h53.6l36.4-40H40a12 12 0 0 1 0-24h111.78l47.34-52.07a12 12 0 0 1 17.76 16.14L184.22 84H216a12 12 0 0 1 0 24h-53.6L126 148h90a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhNotEqualsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
