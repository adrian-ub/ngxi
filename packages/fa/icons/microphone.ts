import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMicrophoneIcon],svg[fa-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 704v128q0 221-147.5 384.5T640 1404v132h256q26 0 45 19t19 45t-19 45t-45 19H256q-26 0-45-19t-19-45t19-45t45-19h256v-132q-217-24-364.5-187.5T0 832V704q0-26 19-45t45-19t45 19t19 45v128q0 185 131.5 316.5T576 1280t316.5-131.5T1024 832V704q0-26 19-45t45-19t45 19t19 45M896 320v512q0 132-94 226t-226 94t-226-94t-94-226V320q0-132 94-226T576 0t226 94t94 226"></svg:path>`,
})
export class FaMicrophoneIcon {
  readonly viewBox = input("0 0 1152 1664")
  readonly width = input("0.7em")
  readonly height = input("1em")
}
