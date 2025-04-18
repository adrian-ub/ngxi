import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSwapBoxLineIcon],svg[ri-swap-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4l3.5 3l-3.5 3v-2h-4v-2h4zm-6 10l-3.5-3l3.5-3v2h4v2h-4z"></svg:path>`,
})
export class RiSwapBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
