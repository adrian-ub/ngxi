import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPasswordSafeIcon],svg[arcticons-password-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="15.092" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.947 20.459a4.947 4.947 0 0 0-9.894 0a4.94 4.94 0 0 0 2.454 4.268l-2.166 7.762h9.317l-2.166-7.762a4.94 4.94 0 0 0 2.455-4.268M42.5 5.5l-7.829 7.829M13.329 34.671L5.5 42.5m37 0l-7.829-7.829M13.329 13.329L5.5 5.5"></svg:path>`,
})
export class ArcticonsPasswordSafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
