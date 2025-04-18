import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditShadowsIcon],svg[gg-edit-shadows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.306 6.992A6 6 0 1 0 15.318 17H12v-1h4.472a6 6 0 0 0 1.19-2.008H12v-1h5.918a6 6 0 0 0 .003-1.966H12v-1h5.668a6 6 0 0 0-1.203-2.034H12v-1z"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditShadowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
