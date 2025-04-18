import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalRibbon1Icon],svg[streamline-medical-ribbon-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 13.5S10 6.39 10 3.5c.101-1.743-1.332-3-3-3s-3.101 1.257-3 3c0 2.89 6.5 10 6.5 10"></svg:path>`,
})
export class StreamlineMedicalRibbon1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
