import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miWindowIcon],svg[mi-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm16 2v4H4V5zM4 11h16v8H4zm6-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class MiWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
