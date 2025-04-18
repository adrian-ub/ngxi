import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPewpewIcon],svg[arcticons-pewpew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.35 25.82l11.83-3.4H5.93L4.5 34.97z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.23 26.47l-9.01 2.91l.49 3.97l4.02 1.21z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.1 26.95l-5.18 10.21l-9.57 2.02l12.4.89zm-.79-8.58l5.04-2.59l-2.96 4.45m5.35-1.29l5.5-1.78l-3.88 4.29M29.74 10.6l5.5-2.67l-3.4 4.86m6.32 0l5.34-2.43l-3.39 5.42"></svg:path>`,
})
export class ArcticonsPewpewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
