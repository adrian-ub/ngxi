import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketChIcon],svg[mdi-power-socket-ch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.78 2H4.22C3 2 2 3 2 4.22v15.56C2 21 3 22 4.22 22h15.56C21 22 22 21 22 19.78V4.22C22 3 21 2 19.78 2M20 13l-3.45 3.45c-.36.36-.8.55-1.25.55H8.7c-.45 0-.89-.19-1.25-.55L4 13c-.5-.5-.5-1.5 0-2l3.45-3.45c.36-.36.8-.55 1.25-.55h6.6c.45 0 .89.19 1.25.55L20 11c.5.5.5 1.5 0 2m-9.5 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m5-2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m-10 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5"></svg:path>`,
})
export class MdiPowerSocketChIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
