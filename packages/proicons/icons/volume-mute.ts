import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsVolumeMuteIcon],svg[proicons-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.253 19.4L7.99 15.782a1 1 0 0 0-.647-.238H4.75a2 2 0 0 1-2-2v-3.086a2 2 0 0 1 2-2h2.594a1 1 0 0 0 .647-.238l4.262-3.62a1 1 0 0 1 1.647.762V18.64a1 1 0 0 1-1.647.762Z"></svg:path><svg:path stroke-linecap="round" d="m16.53 9.64l4.72 4.72m0-4.72l-4.72 4.72"></svg:path></svg:g>`,
})
export class ProiconsVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
