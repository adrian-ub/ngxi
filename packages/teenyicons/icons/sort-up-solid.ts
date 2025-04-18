import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortUpSolidIcon],svg[teenyicons-sort-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.146.146a.5.5 0 0 1 .708 0l3 3l-.708.708L4 1.707V15H3V1.707L.854 3.854l-.708-.708zM15 4H9V3h6zm-2 4H9V7h4zm-2 4H9v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSortUpSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
