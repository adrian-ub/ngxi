import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusRedoIcon],svg[nimbus-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.94.56a8.05 8.05 0 0 1 6.82 3.64V1.55H16V5a1.16 1.16 0 0 1-1.15 1.15h-3.44V4.9h2.32a6.79 6.79 0 0 0-5.79-3.1A6.48 6.48 0 0 0 1.24 8a6.48 6.48 0 0 0 6.7 6.2a6.48 6.48 0 0 0 6.7-6.2h1.24a7.71 7.71 0 0 1-7.94 7.44A7.71 7.71 0 0 1 0 8A7.71 7.71 0 0 1 7.94.56"></svg:path>`,
})
export class NimbusRedoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
