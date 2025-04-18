import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSpacebarIcon],svg[proicons-spacebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 10v2.5a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2V10"></svg:path>`,
})
export class ProiconsSpacebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
