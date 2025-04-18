import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTargetIcon],svg[codicon-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-7 6A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></svg:path></svg:g>`,
})
export class CodiconTargetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
