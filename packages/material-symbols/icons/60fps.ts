import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols60fpsIcon],svg[material-symbols-60fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19H5q-1.25 0-2.125-.875T2 16V8q0-1.25.875-2.125T5 5h5v3H5v2h3q1.25 0 2.125.875T11 13v3q0 1.25-.875 2.125T8 19m-3-6v3h3v-3zm10 3h4V8h-4zm0 3q-1.25 0-2.125-.875T12 16V8q0-1.25.875-2.125T15 5h4q1.25 0 2.125.875T22 8v8q0 1.25-.875 2.125T19 19z"></svg:path>`,
})
export class MaterialSymbols60fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
