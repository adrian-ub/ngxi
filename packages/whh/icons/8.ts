import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whh8Icon],svg[whh-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 704v64q0 106-75 181t-181 75H256q-106 0-181-75T0 768v-64q0-56 23-106t64-86q-41-36-64-86T0 320v-64Q0 150 75 75T256 0h256q106 0 181 75t75 181v64q0 56-23.5 106T681 512q40 36 63.5 86T768 704M640 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v64q0 53 37.5 90.5T256 448h256q53 0 90.5-37.5T640 320zm0 448q0-53-37.5-90.5T512 576H256q-53 0-90.5 37.5T128 704v64q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class Whh8Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
