import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudDoneIcon],svg[zmdi-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92M213 299l141-141l-30-30l-111 110l-44-44l-30 30z"></svg:path>`,
})
export class ZmdiCloudDoneIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
