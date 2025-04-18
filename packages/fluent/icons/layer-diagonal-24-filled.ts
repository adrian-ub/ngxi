import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayerDiagonal24FilledIcon],svg[fluent-layer-diagonal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.984 2.136A2.25 2.25 0 0 1 14 4.252v.177L7.474 6.79A3.75 3.75 0 0 0 5 10.317v5.553a2.25 2.25 0 0 1-3-2.12V7.666A3.25 3.25 0 0 1 4.144 4.61zm4 3A2.25 2.25 0 0 1 18 7.252v.177l-6.856 2.48A3.25 3.25 0 0 0 9 12.967v5.905a2.25 2.25 0 0 1-3-2.122v-6.432A2.75 2.75 0 0 1 7.814 7.73zm4 3A2.25 2.25 0 0 1 22 10.252v6.783a2.25 2.25 0 0 1-1.484 2.116l-7.5 2.714A2.25 2.25 0 0 1 10 19.749v-6.783a2.25 2.25 0 0 1 1.484-2.116z"></svg:path>`,
})
export class FluentLayerDiagonal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
