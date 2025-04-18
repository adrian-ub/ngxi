import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTescoClubcardIcon],svg[arcticons-tesco-clubcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="27.56" x="4.5" y="10.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.5" ry="3.5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.473 26.897h23.054M18.23 21.103h11.54"></svg:path>`,
})
export class ArcticonsTescoClubcardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
