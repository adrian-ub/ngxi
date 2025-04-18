import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPushIcon],svg[octicon-repo-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoPushIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
