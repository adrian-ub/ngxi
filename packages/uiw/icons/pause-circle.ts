import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwPauseCircleIcon],svg[uiw-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0M8.056 5.455a.68.68 0 0 0-.682.681v7.272a.682.682 0 0 0 1.364 0V6.136a.68.68 0 0 0-.682-.681m4.546 0a.68.68 0 0 0-.682.681v7.272a.682.682 0 0 0 1.363 0V6.136a.68.68 0 0 0-.681-.681"></svg:path>`,
})
export class UiwPauseCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
