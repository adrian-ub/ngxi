import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimGoogleHangoutsAltIcon],svg[uim-google-hangouts-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a1 1 0 0 1-1-1v-1.477a9.842 9.842 0 1 1 10.705-8.527a12.53 12.53 0 0 1-9.466 10.975A1 1 0 0 1 12 23" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 11.689a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M8.515 14.688a1 1 0 0 1 0-2a.5.5 0 0 0 .5-.5v-2.5a1 1 0 0 1 2 0v2.5a2.5 2.5 0 0 1-2.5 2.5m6.485-3a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M14.515 14.688a1 1 0 0 1 0-2a.5.5 0 0 0 .5-.5v-2.5a1 1 0 0 1 2 0v2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class UimGoogleHangoutsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
