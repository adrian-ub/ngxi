import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagPanamaIcon],svg[twemoji-flag-panama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M18 18V5H4a4 4 0 0 0-4 4v9zm0 0v13h14a4 4 0 0 0 4-4v-9z"></svg:path><svg:path fill="#005293" d="M18 18v13H4a4 4 0 0 1-4-4v-9z"></svg:path><svg:path fill="#D21034" d="M18 18V5h14a4 4 0 0 1 4 4v9z"></svg:path><svg:path fill="#005293" d="M9.674 10.573L9 8.5l-.674 2.073H6.147l1.763 1.281l-.673 2.073L9 12.646l1.763 1.281l-.673-2.073l1.763-1.281z"></svg:path><svg:path fill="#D21034" d="m25.91 24.854l-.673 2.073L27 25.646l1.763 1.281l-.673-2.073l1.763-1.281h-2.179L27 21.5l-.674 2.073h-2.179z"></svg:path>`,
})
export class TwemojiFlagPanamaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
