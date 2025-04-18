import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorDifferenceAbIcon],svg[mdi-vector-difference-ab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v2h2V3h2V1zm4 0v2h3V1zm5 0v2h2v2h2V3c0-1.11-.89-2-2-2zM1 7v3h2V7zm13 0v7H7v6c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm2 2h4v11H9v-4h5c1.11 0 2-.89 2-2zM1 12v2c0 1.11.89 2 2 2h2v-2H3v-2z"></svg:path>`,
})
export class MdiVectorDifferenceAbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
