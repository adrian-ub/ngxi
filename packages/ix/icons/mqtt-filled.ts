import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMqttFilledIcon],svg[ix-mqtt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v355.2C448 223.034 288.966 64 92.8 64zm-38.4 384H352c0-159.053-128.947-288-288-288v-57.6h28.8c174.97 0 316.8 141.83 316.8 316.8zm-96 0H256c0-106.042-85.958-192-192-192v-57.6c137.856 0 249.6 111.744 249.6 249.6m-96 0H64V294.4c84.826 0 153.6 68.774 153.6 153.6" clip-rule="evenodd"></svg:path>`,
})
export class IxMqttFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
