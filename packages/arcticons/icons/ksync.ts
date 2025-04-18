import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKsyncIcon],svg[arcticons-ksync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.32 16.67v14.6m0-5.7h2.29l4.22-3.85m-4.21 3.85l5.06 5.76m18.74-7.31l-9.46.028l4.91-6.59Zm-40.55 0a17.978 17.978 0 0 1 32.7-10.34m3.26 10.4a17.916 17.916 0 0 1-18 17.9a18.15 18.15 0 0 1-14.8-7.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.58 24.02h9.46l-4.93 6.57Z"></svg:path>`,
})
export class ArcticonsKsyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
