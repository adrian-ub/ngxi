import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSdCardAlertIcon],svg[material-symbols-light-sd-card-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.423L10.423 3h6.962q.69 0 1.153.463T19 4.615v14.77q0 .69-.462 1.152T17.384 21zM12 16.23q.31 0 .501-.21t.191-.481t-.191-.482t-.501-.21t-.501.21t-.191.482q0 .27.191.481q.192.21.501.21m-.5-2.807h1V8.769h-1z"></svg:path>`,
})
export class MaterialSymbolsLightSdCardAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
