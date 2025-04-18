import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPersonCircleIcon],svg[proicons-person-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.826a3.506 3.506 0 1 0 0-7.013a3.506 3.506 0 0 0 0 7.013m0 0a6 6 0 0 1 5.953 5.254M12 13.826a6 6 0 0 0-5.953 5.254m0 0A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.953-2.17m-11.906 0a9.25 9.25 0 1 1 11.907 0"></svg:path>`,
})
export class ProiconsPersonCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
