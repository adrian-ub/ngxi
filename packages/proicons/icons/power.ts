import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPowerIcon],svg[proicons-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.54 5.46a9.25 9.25 0 1 1-13.08 0M12 3.367V12"></svg:path>`,
})
export class ProiconsPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
