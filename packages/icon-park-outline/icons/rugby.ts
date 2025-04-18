import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRugbyIcon],svg[icon-park-outline-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.9 33.9c9.372-9.373 12.538-21.403 7.07-26.87c-5.467-5.468-17.497-2.302-26.87 7.07c-9.372 9.373-12.538 21.403-7.07 26.87c5.467 5.468 17.497 2.302 26.87-7.07M21.171 21.172l5.657 5.656m-1.414-9.899l5.657 5.657M16.93 25.414l5.656 5.657m-9.894 4.249L35.32 12.692M5.615 28.243l14.142 14.142m8.486-36.77l14.142 14.142"></svg:path>`,
})
export class IconParkOutlineRugbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
