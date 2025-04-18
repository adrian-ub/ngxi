import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLemmotifIcon],svg[arcticons-lemmotif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.47 42.5l3.214-4.317m10.307-19.007C20.616 10.103 13.426 5.573 6.383 5.5v17.413l7.301 2.729zV30.96l-10.307 7.223V25.499m23.847 17l-3.215-4.316M24.009 19.176C27.384 10.103 34.574 5.573 41.617 5.5v17.413l-7.301 2.729zm0 11.784l10.307 7.223V25.499"></svg:path>`,
})
export class ArcticonsLemmotifIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
