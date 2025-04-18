import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGloryfitIcon],svg[arcticons-gloryfit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.749 2.5C13.45 2.5 4.855 9.743 2.752 19.41l7.194 2.763C10.84 15.34 16.67 10.06 23.748 10.06c7.7 0 13.941 6.242 13.941 13.941s-6.241 13.94-13.94 13.94a13.9 13.9 0 0 1-4.688-.824l15.657-13.623H13.382l7.46 2.866L7.18 37.701c3.943 4.763 9.9 7.8 16.568 7.8c11.874 0 21.5-9.627 21.5-21.5S35.623 2.5 23.749 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.59 34.627l10.024-7.683l-12.489-2.629l3.697 5.094z"></svg:path>`,
})
export class ArcticonsGloryfitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
