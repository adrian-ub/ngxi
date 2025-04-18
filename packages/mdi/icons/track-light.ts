import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrackLightIcon],svg[mdi-track-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2h3v3.4L4.11 4.38l-2.68 6.46l5.54 2.3l4.97 3.68l1.85.77l3.83-9.24l-1.85-.77L11 6.87V3h3V1zm15.81 5.29l-2.31.96l.76 1.85l2.31-.96zm-2.03 7.28L19 15.42l2.79 1.15l.76-1.85zm-3.59 5.36l-1.85.76l.96 2.31l1.85-.77z"></svg:path>`,
})
export class MdiTrackLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
