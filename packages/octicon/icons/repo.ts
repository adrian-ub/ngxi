import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRepoIcon],svg[octicon-repo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
