import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlaylistFillIcon],svg[ph-playlist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m0 48h72a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 64H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m103.59-53.47a8 8 0 0 1-10.12 5.06L184 131.1V176a24 24 0 1 1-16-22.62V120a8 8 0 0 1 10.53-7.59l24 8a8 8 0 0 1 5.06 10.12"></svg:path>`,
})
export class PhPlaylistFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
