import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSkipForward24Icon],svg[qlementine-icons-skip-forward-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4a1 1 0 0 0-2 0v16a1 1 0 0 0 2 0zM4 4a1 1 0 0 1 1.66-.747l9 8a1 1 0 0 1 0 1.494l-9 8A1 1 0 0 1 4 20z"></svg:path>`,
})
export class QlementineIconsSkipForward24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
