import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsCropIcon],svg[gridicons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16h-4V8a2 2 0 0 0-2-2H8V2H6v4H2v2h4v8a2 2 0 0 0 2 2h8v4h2v-4h4zM8 16V8h8v8z"></svg:path>`,
})
export class GridiconsCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
