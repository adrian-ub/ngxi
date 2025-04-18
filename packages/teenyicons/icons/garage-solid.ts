import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGarageSolidIcon],svg[teenyicons-garage-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.21.093a.5.5 0 0 1 .58 0l7 5A.5.5 0 0 1 15 5.5v9a.5.5 0 0 1-.5.5H13V7H2v8H.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .21-.407z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 15h9v-4H3zm6-2H6v-1h3z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 10V8H3v2z"></svg:path>`,
})
export class TeenyiconsGarageSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
