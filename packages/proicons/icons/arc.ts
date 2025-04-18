import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArcIcon],svg[proicons-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 4.75h-.5c-7.732 0-14 6.268-14 14v.5"></svg:path>`,
})
export class ProiconsArcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
