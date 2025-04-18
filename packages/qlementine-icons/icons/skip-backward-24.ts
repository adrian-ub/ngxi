import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSkipBackward24Icon],svg[qlementine-icons-skip-backward-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0zm16 0a1 1 0 0 0-1.66-.747l-9 8a.996.996 0 0 0 0 1.494l9 8A1 1 0 0 0 20 20z"></svg:path>`,
})
export class QlementineIconsSkipBackward24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
