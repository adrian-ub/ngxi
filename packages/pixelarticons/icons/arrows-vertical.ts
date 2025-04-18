import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowsVerticalIcon],svg[pixelarticons-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h2V7h2v2h2V7h-2V5h-2V3h-2v2H9v2H7v2h2V7h2zm0 2h2v4h2v2h-2v2h-2v-2H9v-2h2zm-2 4v-2H7v2zm6 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsArrowsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
