import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBoneSolidIcon],svg[streamline-bone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.846 2.154a2.154 2.154 0 0 0-4.308 0c.003.57.231 1.116.636 1.518L3.672 8.174a2.15 2.15 0 0 0-1.518-.636a2.154 2.154 0 1 0 0 4.308a2.154 2.154 0 0 0 4.308 0a2.15 2.15 0 0 0-.636-1.518l4.502-4.502c.402.405.948.633 1.518.636a2.154 2.154 0 0 0 0-4.308"></svg:path>`,
})
export class StreamlineBoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
