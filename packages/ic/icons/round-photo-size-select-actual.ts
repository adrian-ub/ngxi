import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPhotoSizeSelectActualIcon],svg[ic-round-photo-size-select-actual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5.63 16.19l2.49-3.2a.5.5 0 0 1 .78-.01l2.1 2.53l3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.41-.01-.65-.49-.39-.82"></svg:path>`,
})
export class IcRoundPhotoSizeSelectActualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
