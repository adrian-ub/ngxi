import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown2Icon],svg[streamline-arrow-curvy-up-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.385 2.958v8.084a2.193 2.193 0 0 1-4.385 0V2.958a2.192 2.192 0 1 0-4.385 0v8.084"></svg:path><svg:path d="m9.385 4.868l2-2l2 2M4.615 9.07l-2 2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineArrowCurvyUpDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
