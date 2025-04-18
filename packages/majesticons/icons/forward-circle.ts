import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardCircleIcon],svg[majesticons-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M6.507 8.13a1 1 0 0 1 1.008.013L12 10.833V9a1 1 0 0 1 1.514-.857l5 3a1 1 0 0 1 0 1.714l-5 3A1 1 0 0 1 12 15v-1.834l-4.486 2.691A1 1 0 0 1 6 15V9a1 1 0 0 1 .507-.87M8 13.234L10.056 12L8 10.766zM16.056 12L14 13.234v-2.468z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsForwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
