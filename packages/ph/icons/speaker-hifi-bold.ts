import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiBoldIcon],svg[ph-speaker-hifi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H68V44h120ZM112 76a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 120a44 44 0 1 0-44-44a44.05 44.05 0 0 0 44 44m0-64a20 20 0 1 1-20 20a20 20 0 0 1 20-20"></svg:path>`,
})
export class PhSpeakerHifiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
