import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareHeadphonesIcon],svg[nrk-hardware-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 22V6.667L5.5 2h13L22 6.667V22h-7v-9h5V7.333L17.5 4h-11L4 7.333V13h5v9zm5-7v5H4v-5zm13 5v-5h-3v5z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
