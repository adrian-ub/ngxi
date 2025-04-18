import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsComboboxIndicator16Icon],svg[qlementine-icons-combobox-indicator-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.35 1.65a.5.5 0 0 0-.707 0l-3.5 3.5a.5.5 0 0 0 .707.707L8 2.707l3.15 3.15a.5.5 0 0 0 .707-.707l-3.5-3.5zm3.55 9.25l-3.5 3.5a.5.5 0 0 1-.707 0l-3.5-3.5a.5.5 0 0 1 .707-.707l3.15 3.15l3.15-3.15a.5.5 0 0 1 .707.707z"></svg:path>`,
})
export class QlementineIconsComboboxIndicator16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
