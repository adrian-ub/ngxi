import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoInputScartIcon],svg[mdi-video-input-scart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.6 2.2l-3.3.2l-3.5 2l-.5-.9L2 10v7h1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h1v-7h-1l-.2-.4l3.5-2l1.8-2.8zM15 17v2H5v-2z"></svg:path>`,
})
export class MdiVideoInputScartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
