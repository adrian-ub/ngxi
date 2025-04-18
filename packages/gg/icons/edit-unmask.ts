import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditUnmaskIcon],svg[gg-edit-unmask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-1 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0M5 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgEditUnmaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
