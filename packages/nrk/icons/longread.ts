import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkLongreadIcon],svg[nrk-longread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 10v5h5v-5zm7 1.618V17H2v-7H0V8h11v1.382l1-.5l1 .5V8h11v2h-2v7h-9v-5.382l-1-.5zm4 1V15h5v-5h-5z" clip-rule="evenodd"></svg:path>`,
})
export class NrkLongreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
