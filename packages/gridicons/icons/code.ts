import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsCodeIcon],svg[gridicons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-5.45 6.5L16 17.21L20.39 12L16 6.79l1.55-1.29zM8 6.79L6.45 5.5L1 12l5.45 6.5L8 17.21L3.61 12zm.45 14.61l1.93.52L15.55 2.6l-1.93-.52z"></svg:path>`,
})
export class GridiconsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
