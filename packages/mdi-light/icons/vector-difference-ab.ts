import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightVectorDifferenceAbIcon],svg[mdi-light-vector-difference-ab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-4h5a2 2 0 0 0 2-2V8zM8 16v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3v4a3 3 0 0 1-3 3zm3-14h1a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2h-1zM4 2h1v1H4a2 2 0 0 0-2 2v1H1V5a3 3 0 0 1 3-3m3 1V2h2v1zm-5 7H1V8h1zm0 3a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3v-1h1z"></svg:path>`,
})
export class MdiLightVectorDifferenceAbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
