import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsReturnLightIcon],svg[lets-icons-return-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10l.354.354l.353-.354l-.353-.354zM3.5 18a.5.5 0 0 0 1 0zm11.854-2.646l5-5l-.708-.708l-5 5zm5-5.708l-5-5l-.708.708l5 5zM20 9.5H10v1h10zM3.5 16v2h1v-2zM10 9.5A6.5 6.5 0 0 0 3.5 16h1a5.5 5.5 0 0 1 5.5-5.5z"></svg:path>`,
})
export class LetsIconsReturnLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
