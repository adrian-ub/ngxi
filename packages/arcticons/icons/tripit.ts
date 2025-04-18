import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTripitIcon],svg[arcticons-tripit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="10.666" cy="27.648" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.166" ry="5.536"></svg:ellipse><svg:circle cx="24.488" cy="18.04" r="3.109" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.666" cy="13.21" r="4.316" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="38.516" cy="27.648" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.984" ry="4.522"></svg:ellipse><svg:circle cx="23.255" cy="35.51" r="3.597" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.666 22.112v-4.586m4.874 6.737l6.401-4.444m-5.109 7.829h16.7m-13.321 5.953l-4.226-3.159"></svg:path>`,
})
export class ArcticonsTripitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
