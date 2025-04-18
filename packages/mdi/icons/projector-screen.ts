import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenIcon],svg[mdi-projector-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v9h6v2.59l-4.21 4.2l1.42 1.42l2.79-2.8V22h2v-2.59l2.79 2.8l1.42-1.42l-4.21-4.2V14h6V5h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class MdiProjectorScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
