import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCreditCard1SolidIcon],svg[streamline-credit-card-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1.75A1.5 1.5 0 0 0 0 3.25v.94h14v-.94a1.5 1.5 0 0 0-1.5-1.5zm-1.5 9V5.44h14v5.31a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5m9.5-2.125a.625.625 0 1 0 0 1.25H11a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCreditCard1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
