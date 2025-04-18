import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMuteIcon],svg[codicon-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 5h2.79l3.86-3.83l.85.35v13l-.85.33L4.29 11H1.5l-.5-.5v-5zm3.35 5.17L8 13.31V2.73L4.85 5.85L4.5 6H2v4h2.5zm9.381-4.108l.707.707L13.207 8.5l1.731 1.732l-.707.707L12.5 9.207l-1.732 1.732l-.707-.707L11.793 8.5L10.06 6.77l.707-.707l1.733 1.73z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconMuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
