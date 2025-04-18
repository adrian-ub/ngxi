import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiFillIcon],svg[ph-speaker-hifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 160a24 24 0 1 1-24-24a24 24 0 0 1 24 24m56-120v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-92 28a12 12 0 1 0 12-12a12 12 0 0 0-12 12m52 92a40 40 0 1 0-40 40a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhSpeakerHifiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
