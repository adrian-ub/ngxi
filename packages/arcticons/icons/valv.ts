import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsValvIcon],svg[arcticons-valv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.721 10.485A21.5 21.5 0 0 1 45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24a21.5 21.5 0 0 1 4.773-13.507m3.667-3.571a21.5 21.5 0 0 1 26.122 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 6.925l18.5 37l18.5-37H28.167l-4.166 9.489l-4.167-9.49z"></svg:path>`,
})
export class ArcticonsValvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
