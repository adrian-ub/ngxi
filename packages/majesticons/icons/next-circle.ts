import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsNextCircleIcon],svg[majesticons-next-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.498-4.865a1 1 0 0 1 .998-.003L15 10.848V8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0v-2.848l-6.504 3.716A1 1 0 0 1 7 16V8a1 1 0 0 1 .498-.865" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsNextCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
