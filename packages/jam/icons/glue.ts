import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGlueIcon],svg[jam-glue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11a1 1 0 0 0-1 1v7h6v-7a1 1 0 0 0-1-1zm1-5V1a1 1 0 1 1 2 0v5h1a1 1 0 0 1 1 1v2.17c1.165.413 2 1.524 2 2.83v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7c0-1.306.835-2.417 2-2.83V7a1 1 0 0 1 1-1zm0 2v1h2V8z"></svg:path>`,
})
export class JamGlueIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
