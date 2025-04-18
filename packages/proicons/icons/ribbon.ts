import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRibbonIcon],svg[proicons-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.41 9.16a6.4 6.4 0 0 1-2.426 5.02A6.38 6.38 0 0 1 12 15.57c-1.506 0-2.89-.52-3.984-1.388A6.41 6.41 0 1 1 18.41 9.16"></svg:path><svg:path d="M15.984 14.18v7.07L12 18.267L8.016 21.25v-7.07"></svg:path></svg:g>`,
})
export class ProiconsRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
