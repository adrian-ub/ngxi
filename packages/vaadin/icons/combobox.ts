import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinComboboxIcon],svg[vaadin-combobox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1m-5 7H1V5h9zm3-2.6L11 7h4z"></svg:path><svg:path fill="currentColor" d="M2 6h1v4H2z"></svg:path>`,
})
export class VaadinComboboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
