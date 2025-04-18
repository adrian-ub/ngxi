import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8AlignLeftIcon],svg[icons8-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm0 4v2h18v-2zm0 4v2h26v-2zm0 4v2h18v-2zm0 4v2h26v-2z"></svg:path>`,
})
export class Icons8AlignLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
