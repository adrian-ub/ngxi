import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsForwardCircleSolidIcon],svg[teenyicons-forward-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m4.249-2.432a.5.5 0 0 1 .5-.002L8 6.924V5.5a.5.5 0 0 1 .748-.434l3.5 2a.5.5 0 0 1 0 .868l-3.5 2A.5.5 0 0 1 8 9.5V8.076L4.748 9.934A.5.5 0 0 1 4 9.5v-4a.5.5 0 0 1 .249-.432" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsForwardCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
