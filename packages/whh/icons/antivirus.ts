import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAntivirusIcon],svg[whh-antivirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.68 1024h-43l-188-188l-46 46q-14 14-33.5 14t-33.5-14l-410-410q-14-14-14-34t14-34l46-45l-163-163l-46 46q-14 14-33.5 14t-33.5-14l-26-26q-14-14-14-34t14-34l134-134q14-14 34-14t34 14l26 26q14 14 14 33.5t-14 33.5l-46 46l163 162l45-45q14-14 34-14t34 14l410 410q14 14 14 33.5t-14 33.5l-46 46l188 188z"></svg:path>`,
})
export class WhhAntivirusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
