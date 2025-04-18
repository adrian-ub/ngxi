import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsClose16Icon],svg[qlementine-icons-close-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.15 4.15a.5.5 0 0 1 .707 0l3.15 3.15l3.15-3.15a.5.5 0 0 1 .707.707l-3.15 3.15l3.15 3.15a.5.5 0 0 1-.707.707l-3.15-3.15l-3.15 3.15a.5.5 0 0 1-.707-.707l3.15-3.15l-3.15-3.15a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsClose16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
