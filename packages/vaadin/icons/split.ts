import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSplitIcon],svg[vaadin-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11h6v5H0zm11-1V8l-.64.64a4.43 4.43 0 0 1-1.358-3.658L11.001 5V0h-6v5h2a4.43 4.43 0 0 1-1.358 3.639l-.642-.638v2h2l-.65-.65A5.43 5.43 0 0 0 8 4.982q-.016.224-.016.45c0 1.539.639 2.928 1.665 3.917l-.648.652h2zm-1 1h6v5h-6z"></svg:path>`,
})
export class VaadinSplitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
