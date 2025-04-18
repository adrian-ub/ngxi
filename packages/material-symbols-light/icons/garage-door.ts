import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageDoorIcon],svg[material-symbols-light-garage-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.385 13.846v-1h7.23v1zm0 3.077v-1h7.23v1zm0 3.077v-1h7.23v1zM12 4.308l8.616 7.461H18V20h-1v-9.23H7V20H6v-8.23H3.385z"></svg:path>`,
})
export class MaterialSymbolsLightGarageDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
