import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAimLabIcon],svg[arcticons-aim-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 25.666l-9.17 17.762A21.5 21.5 0 0 0 24 45.5a21.5 21.5 0 0 0 9.17-2.072z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5C12.126 2.5 2.5 12.126 2.5 24a21.5 21.5 0 0 0 5.805 14.633L24 8.223l15.695 30.41A21.5 21.5 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5"></svg:path>`,
})
export class ArcticonsAimLabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
