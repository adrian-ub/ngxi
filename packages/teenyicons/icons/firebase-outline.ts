import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFirebaseOutlineIcon],svg[teenyicons-firebase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m2.5 11.5l9-8l1 9l-5 2zm0 0l5-9l2 3m-7 6l1-11l3 3"></svg:path>`,
})
export class TeenyiconsFirebaseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
