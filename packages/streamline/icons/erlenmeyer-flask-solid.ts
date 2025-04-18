import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineErlenmeyerFlaskSolidIcon],svg[streamline-erlenmeyer-flask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.02.75A.75.75 0 0 1 3.77 0h6.46a.75.75 0 0 1 0 1.5H9.5v4.827l3.486 4.437c1.031 1.313.097 3.236-1.572 3.236H2.586c-1.669 0-2.604-1.923-1.572-3.236L4.5 6.327V1.5h-.73a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineErlenmeyerFlaskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
