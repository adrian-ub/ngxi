import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBluetoothConnectIcon],svg[mdi-bluetooth-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 10l-2 2l2 2l2-2m-6.12 4.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29M7 12l-2-2l-2 2l2 2z"></svg:path>`,
})
export class MdiBluetoothConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
