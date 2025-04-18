import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiControlsHorizontalIcon],svg[oui-controls-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.05 10a2.5 2.5 0 0 1 4.9 0h1.55a.5.5 0 1 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H1.5a.5.5 0 1 1 0-1zm-.1-4a2.5 2.5 0 0 1-4.9 0H1.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h6.55a.5.5 0 1 1 0 1zM4 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m8 5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class OuiControlsHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
