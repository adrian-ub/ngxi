import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackwardCircleIcon],svg[majesticons-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m5.493 7.13a1 1 0 0 0-1.008.013L12 10.833V9a1 1 0 0 0-1.514-.857l-5 3a1 1 0 0 0 0 1.714l5 3A1 1 0 0 0 12 15v-1.834l4.485 2.691A1 1 0 0 0 18 15V9a1 1 0 0 0-.507-.87M16 13.234L13.944 12L16 10.766zM7.944 12L10 13.234v-2.468z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBackwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
