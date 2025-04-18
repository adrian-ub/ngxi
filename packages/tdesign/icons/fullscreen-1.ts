import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFullscreen1Icon],svg[tdesign-fullscreen-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM6 14v4h4v2H4v-6zm14 0v6h-6v-2h4v-4z"></svg:path>`,
})
export class TdesignFullscreen1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
