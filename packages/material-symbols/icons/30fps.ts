import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols30fpsIcon],svg[material-symbols-30fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-3h6v-2.5H2v-3h6V8H2V5h6q1.25 0 2.125.875T11 8v1.9q0 .875-.612 1.488T8.9 12q.875 0 1.488.613T11 14.1V16q0 1.25-.875 2.125T8 19zm13-3h4V8h-4zm0 3q-1.25 0-2.125-.875T12 16V8q0-1.25.875-2.125T15 5h4q1.25 0 2.125.875T22 8v8q0 1.25-.875 2.125T19 19z"></svg:path>`,
})
export class MaterialSymbols30fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
