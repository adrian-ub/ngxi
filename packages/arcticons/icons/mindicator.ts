import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindicatorIcon],svg[arcticons-mindicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 18.54h39v11.048h-39Zm28.302 11.071a10.438 10.438 0 0 1-17.603 0m-.091-11.077a10.438 10.438 0 0 1 17.784 0m6.386 11.064a16.273 16.273 0 0 1-30.559 0m-.045-11.07a16.273 16.273 0 0 1 30.653.01"></svg:path><svg:circle cx="24" cy="24" r="1.867" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.532 24h9.78m-3.792-2.19L37.312 24l-3.792 2.19M20.468 24h-9.78m3.792 2.19L10.688 24l3.792-2.19"></svg:path>`,
})
export class ArcticonsMindicatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
