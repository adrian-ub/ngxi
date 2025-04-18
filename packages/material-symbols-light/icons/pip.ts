import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPipIcon],svg[material-symbols-light-pip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.616v-1h3.927l-5.55-5.531l.707-.708l5.532 5.53V5h1v5.616zM4.616 19q-.691 0-1.153-.462T3 17.384V13h1v4.385q0 .269.173.442t.443.173h7.153v1zM20 12.77V6.615q0-.27-.173-.443T19.385 6H11V5h8.385q.69 0 1.153.463T21 6.616v6.153zM14.154 19v-3.846H21V19z"></svg:path>`,
})
export class MaterialSymbolsLightPipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
