import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiMetubeIcon],svg[cbi-metube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.582 7.186a2.5 2.5 0 0 0-1.768-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768A26 26 0 0 0 2 12a26 26 0 0 0 .418 4.814a2.5 2.5 0 0 0 1.768 1.768C5.745 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768A26 26 0 0 0 22 12a26 26 0 0 0-.418-4.814M15 13.843v1.325H9v-1.325h3L9 8.648h6l-3 5.2z"></svg:path>`,
})
export class CbiMetubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
