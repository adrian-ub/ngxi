import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcOptimumIcon],svg[arcticons-pc-optimum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.762 21.755c-.053 4.151.099 14.298 3.929 16.55c1.829 1.076.169-9.31-3.423-13.695c-4.764-5.815-16.63-9.193-13.133-10.978c8.968-4.577 22.113-5.553 22.376.807c.163 3.924-3.525 6.633-12.045 11.655"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.581 10.921l-1.405-1.304C18.587 13.706 18.5 40.34 42.5 21.513"></svg:path>`,
})
export class ArcticonsPcOptimumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
