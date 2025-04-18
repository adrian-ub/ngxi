import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPelisboxIcon],svg[arcticons-pelisbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 28v2c0 2.216-1.784 4-4 4h-27c-2.216 0-4-1.784-4-4V18c0-2.216 1.784-4 4-4h27c2.216 0 4 1.784 4 4v2m-4-2.038l8 12.076m0-12.076l-8 12.076"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.33 24a3.019 3.019 0 1 1 0 6.038h-4.981V17.963h4.981a3.019 3.019 0 1 1 0 6.038zm0 0h-4.975m16.57-6.038a4 4 0 0 1 4 4v4.075a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4v-4.075a4 4 0 0 1 4-4"></svg:path>`,
})
export class ArcticonsPelisboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
