import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPocketIcon],svg[whh-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.56 896q-88 0-162-16t-140-54t-111.5-96t-72-146T.56 384V128q0-53 37.5-90.5T128.56 0h768q53 0 90.5 37.5t37.5 90.5v256q0 112-26.5 200t-72 146t-111.5 96t-140 54t-162 16m295.5-617.5q-24.5-23.5-59.5-23.5t-59 23l-177 169l-178-169q-24-23-58.5-23t-59 23.5t-24.5 56.5t24 56l237 225q24 24 58.5 24t59.5-24l236-225q25-23 25-56t-24.5-56.5"></svg:path>`,
})
export class WhhPocketIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
