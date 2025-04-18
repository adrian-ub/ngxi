import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLeftAltIcon],svg[lets-icons-arrow-alt-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 12l-.354-.354l-.353.354l.353.354zm12 .5a.5.5 0 0 0 0-1zM8.646 7.646l-4 4l.708.708l4-4zm-4 4.708l4 4l.708-.708l-4-4zM5 12.5h12v-1H5z"></svg:path>`,
})
export class LetsIconsArrowAltLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
