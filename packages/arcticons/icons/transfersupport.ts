import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTransfersupportIcon],svg[arcticons-transfersupport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.5" height="37" x="6.95" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" ry="1.5"></svg:rect><svg:rect width="15.6" height="28.5" x="25.45" y="9.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.293 24h17.414m-3.432-3.432l3.433 3.433l-3.433 3.432M32.5 35.7H34m-22.8-3.299h1m-1 1.581h1m-1 1.582h1m-1 1.582h1m-3.5-4.745h1m-1 1.581h1m-1 1.582h1m-1 1.582h1m4-4.745h1m-1 1.581h1m-1 1.582h1m-1 1.582h1M8.45 8.4h6.5v14h-6.5z"></svg:path><svg:rect width="2.5" height="2.5" x="10.45" y="28.386" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".5" ry=".5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.95 25.5h9.5"></svg:path>`,
})
export class ArcticonsTransfersupportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
