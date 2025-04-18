import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackCircleIcon],svg[majesticons-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-7.496-4.868A1 1 0 0 1 17 8v8a1 1 0 0 1-1.496.868L9 13.152V16a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0v2.848zM15 9.723L11.016 12L15 14.277z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBackCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
