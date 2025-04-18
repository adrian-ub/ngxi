import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconProjectIcon],svg[codicon-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1h13l.5.5v13l-.5.5h-13l-.5-.5v-13zM2 14h12V2H2zM3 3h2v10H3zm6 0H7v6h2zm2 0h2v8h-2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconProjectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
