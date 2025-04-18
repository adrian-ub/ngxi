import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightVectorDifferenceBaIcon],svg[mdi-light-vector-difference-ba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h8a3 3 0 0 1 3 3v4h-5a2 2 0 0 0-2 2v5H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m10 6V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-4a3 3 0 0 1 3-3zm4 0a3 3 0 0 1 3 3v1h-1v-1a2 2 0 0 0-2-2h-1V8zm3 8h-1v-2h1zm0 3a3 3 0 0 1-3 3h-1v-1h1a2 2 0 0 0 2-2v-1h1zm-8 3v-1h2v1zm-3 0a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h1v1z"></svg:path>`,
})
export class MdiLightVectorDifferenceBaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
