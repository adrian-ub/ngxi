import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMouthLipIcon],svg[streamline-mouth-lip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 7.5s1.686 3.486 6 3.486S13 7.5 13 7.5s-1.427-4.875-6-2.312C2.427 2.625 1 7.5 1 7.5m0-.004h12"></svg:path>`,
})
export class StreamlineMouthLipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
