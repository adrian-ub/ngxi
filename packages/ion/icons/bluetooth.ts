import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBluetoothIcon],svg[ion-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M388 160.77a20 20 0 0 0-5.85-14.91l-112-112A20 20 0 0 0 236 48v164.52l-79-67.71a20 20 0 0 0-26 30.38L225.27 256L131 336.81a20 20 0 1 0 26 30.38l79-67.71V464a20 20 0 0 0 34.14 14.14l112-112a20 20 0 0 0-1.14-29.33L286.73 256L381 175.19a20 20 0 0 0 7-14.42m-49.42 192.36L276 415.72V299.49ZM276 212.52V96.28l62.59 62.59Z"></svg:path>`,
})
export class IonBluetoothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
