import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusArchiveIcon],svg[nimbus-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2.75a1.25 1.25 0 0 0-1.25-1.25H1.75A1.25 1.25 0 0 0 .5 2.75v2.5h1.25v8A1.25 1.25 0 0 0 3 14.5h10a1.25 1.25 0 0 0 1.25-1.25v-8h1.25zM13 5.25v8H3v-8zM14.25 4H1.75V2.75h12.5z"></svg:path><svg:path fill="currentColor" d="M7.38 8.38h1.24a.63.63 0 0 0 0-1.26H7.38a.63.63 0 0 0 0 1.26"></svg:path>`,
})
export class NimbusArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
