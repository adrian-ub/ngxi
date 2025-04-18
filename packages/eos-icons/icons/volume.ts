import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsVolumeIcon],svg[eos-icons-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M7 3a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 18a1 1 0 1 1 1-1a1 1 0 0 1-1 1m5-7a5 5 0 0 1-2-.422V11H7.422A4.997 4.997 0 1 1 12 14m5 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0-16a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:circle cx="12" cy="9" r="2" fill="currentColor"></svg:circle>`,
})
export class EosIconsVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
