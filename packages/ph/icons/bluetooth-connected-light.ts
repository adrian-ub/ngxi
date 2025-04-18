import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedLightIcon],svg[ph-bluetooth-connected-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.6 171.2L138 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 122 32v84L67.6 75.2a6 6 0 0 0-7.2 9.6L118 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M134 44l48 36l-48 36Zm0 168v-72l48 36Zm-74-74a10 10 0 1 1 10-10a10 10 0 0 1-10 10m154-10a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBluetoothConnectedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
