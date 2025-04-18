import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whh6Icon],svg[whh-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 384h256q107 0 182 75t75 181v128q0 106-75 181t-182 75H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q107 0 182 75t75 181q0 27-19 45.5T704.5 320t-45-18.5T641 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v163q60-35 128-35M128 768q0 53 37.5 90.5T256 896h256q54 0 91.5-37.5T641 768V640q0-53-37.5-90.5T512 512H256q-53 0-90.5 37.5T128 640z"></svg:path>`,
})
export class Whh6Icon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
