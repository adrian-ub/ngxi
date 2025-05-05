import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVolumeIcon],svg[picon-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V3h2l2-2v6L3 5"></svg:path>`,
})
export class PiconVolumeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
