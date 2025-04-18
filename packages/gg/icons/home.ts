import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggHomeIcon],svg[gg-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21 8.772l-6.98-6.979a3 3 0 0 0-4.242 0L3 8.571v14.515h7v-6a2 2 0 1 1 4 0v6h7zm-9.808-5.565L5 9.4v11.686h3v-4a4 4 0 0 1 8 0v4h3V9.6l-6.393-6.394a1 1 0 0 0-1.415 0" clip-rule="evenodd"></svg:path>`,
})
export class GgHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
