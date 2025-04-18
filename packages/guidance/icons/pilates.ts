import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePilatesIcon],svg[guidance-pilates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 20.5h24m-10-11H3.5a2 2 0 0 0-1.831 1.195c-.214.485.042 1.016.417 1.39l4.53 4.531a3.02 3.02 0 0 0 4.268 0L15 12.5h2s3.036.174 6.5-1.826M10 14L5.5 9.5m-2.805-2S.885 6.943.56 5.724a1.77 1.77 0 0 1 1.242-2.163a1.75 1.75 0 0 1 2.146 1.25c.324 1.219-.962 2.61-.962 2.61z"></svg:path>`,
})
export class GuidancePilatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
