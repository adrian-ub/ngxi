import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftStopLightIcon],svg[lets-icons-arrow-left-stop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10 12l-.354-.354l-.353.354l.353.354zm10 .5a.5.5 0 0 0 0-1zm-4.354-6.854l-6 6l.708.708l6-6zm-6 6.708l6 6l.708-.708l-6-6zM10 12.5h10v-1H10z"></svg:path><svg:path stroke="currentColor" d="M4 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftStopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
