import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiTransfer2OutlinedIcon],svg[weui-transfer2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M9.79 9.924H17v1.2H7.546a.5.5 0 0 1-.321-.884l3.161-2.647a.4.4 0 0 1 .591.527zm4.466 4.156h-7.21v-1.2H16.5a.5.5 0 0 1 .321.883L13.66 16.41a.4.4 0 0 1-.591-.526z"></svg:path>`,
})
export class WeuiTransfer2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
