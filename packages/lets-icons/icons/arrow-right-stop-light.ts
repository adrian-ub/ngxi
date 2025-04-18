import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightStopLightIcon],svg[lets-icons-arrow-right-stop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14 12l.354-.354l.353.354l-.353.354zm-10 .5a.5.5 0 0 1 0-1zm4.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM14 12.5H4v-1h10z"></svg:path><svg:path stroke="currentColor" d="M20 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightStopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
