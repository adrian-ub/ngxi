import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPenFIcon],svg[jam-pen-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.406 12.732L5.367 9.693q.815-1.435 2.375-2.838q2.012-1.812 7.1-6.126a1.795 1.795 0 0 1 2.53 2.53q-4.32 5.097-6.125 7.1q-1.402 1.555-2.841 2.373M3.99 11.146l2.965 2.964l-1.366 1.906l-5.276 1.795l1.771-5.3z"></svg:path>`,
})
export class JamPenFIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
