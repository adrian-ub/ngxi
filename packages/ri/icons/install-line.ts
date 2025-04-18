import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInstallLineIcon],svg[ri-install-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm9.999 14h-14L5 20h14zM17 17v2h-2v-2zM13 2v5h3l-4 4l-4-4h3V2z"></svg:path>`,
})
export class RiInstallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
