import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWindyDustIcon],svg[carbon-windy-dust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 28a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3h-1v-2h1a5 5 0 0 1 0 10m-7-10h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2H4zm17-3h-1v-2h1a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5m-7-2h4v2h-4zm-6 0h4v2H8z"></svg:path>`,
})
export class CarbonWindyDustIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
