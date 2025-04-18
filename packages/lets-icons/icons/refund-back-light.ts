import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefundBackLightIcon],svg[lets-icons-refund-back-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l-.354.354L3.293 8l.353-.354zm5 11.5a.5.5 0 0 1 0-1zm-.354-6.146l-5-5l.708-.708l5 5zm-5-5.708l5-5l.708.708l-5 5zM4 7.5h10.5v1H4zm10.5 12H9v-1h5.5zm6-6a6 6 0 0 1-6 6v-1a5 5 0 0 0 5-5zm-6-6a6 6 0 0 1 6 6h-1a5 5 0 0 0-5-5z"></svg:path>`,
})
export class LetsIconsRefundBackLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
