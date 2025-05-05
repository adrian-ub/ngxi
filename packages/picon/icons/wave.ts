import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWaveIcon],svg[picon-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8c6-2 4-6 1-4c4-6 6-1 7 4"></svg:path>`,
})
export class PiconWaveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
