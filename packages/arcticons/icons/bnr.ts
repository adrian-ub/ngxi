import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBnrIcon],svg[arcticons-bnr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.017 29.647V18.353h3.698c2.09 0 3.785 1.698 3.785 3.793s-1.695 3.793-3.785 3.793h-3.698m3.698 0l3.697 3.706m-18.192.002V18.353l7.483 11.294V18.353M14.16 24a2.824 2.824 0 1 1 0 5.647H9.5V18.353h4.66a2.824 2.824 0 1 1 0 5.647m-.001 0H9.5"></svg:path>`,
})
export class ArcticonsBnrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
