import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTesterupIcon],svg[arcticons-testerup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.501 31.916H11.926A6.42 6.42 0 0 1 5.5 25.475v-9.018a6.42 6.42 0 0 1 6.426-6.442h20.563a6.42 6.42 0 0 1 6.425 6.442v1.596"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.26 27.705h-5.656a1.284 1.284 0 0 1-1.286-1.288V17.49c0-.714.574-1.289 1.286-1.289h19.128c.712 0 1.285.575 1.285 1.289v6.523"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.95 27.705l.065-3.222l13.598 13.502L42.5 24.129v-9.7l-4.715-1.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.43L28.726 28.35l-3.65-3.932l-10.06.065"></svg:path>`,
})
export class ArcticonsTesterupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
