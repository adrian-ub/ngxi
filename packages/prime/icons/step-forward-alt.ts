import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeStepForwardAltIcon],svg[prime-step-forward-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.25c-.41 0-.75.34-.75.75v6.19L8.53 4.47A.751.751 0 0 0 7.25 5v14c0 .3.18.58.46.69a.75.75 0 0 0 .82-.16l6.72-6.72V19c0 .41.34.75.75.75s.75-.34.75-.75V5c0-.41-.34-.75-.75-.75M8.75 17.19V6.81L13.94 12z"></svg:path>`,
})
export class PrimeStepForwardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
