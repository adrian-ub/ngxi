import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPetcubeIcon],svg[arcticons-petcube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.003 44.5l17.724-10.229V13.803L23.887 3.5L6.163 13.729v20.468z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.105 23.036l2.625-1.497l2.626 4.528m2.898 1.674l2.626-1.497l2.625 4.528"></svg:path>`,
})
export class ArcticonsPetcubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
