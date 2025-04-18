import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsVolumeIcon],svg[ls-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 272v150c0 9 7 15 15 15h84l169 129c27 28 47 18 47-20V147c0-39-20-47-47-19L99 257H15c-8 0-15 6-15 15"></svg:path>`,
})
export class LsVolumeIcon {
  readonly viewBox = input("0 0 315 614")
  readonly width = input("0.52em")
  readonly height = input("1em")
}
