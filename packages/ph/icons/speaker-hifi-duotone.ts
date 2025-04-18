import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiDuotoneIcon],svg[ph-speaker-hifi-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 32H64a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-64 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h128ZM116 76a12 12 0 1 1 12 12a12 12 0 0 1-12-12m12 116a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path></svg:g>`,
})
export class PhSpeakerHifiDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
