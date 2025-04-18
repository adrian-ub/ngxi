import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAskusIcon],svg[arcticons-askus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.84 2.689a9 9 0 0 1 .412 2.69h0A9 9 0 0 1 6.62 11.464m-2.156 3.753a9 9 0 0 1-.002 17.567m2.155 3.748a9 9 0 0 1 15.631 6.086h0a9 9 0 0 1-.416 2.704M41.43 11.408a9 9 0 0 1-15.244-8.803m17.352 30.178a9 9 0 0 1 .075-17.583m-17.45 30.124a9 9 0 0 1 15.21-8.794"></svg:path>`,
})
export class ArcticonsAskusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
