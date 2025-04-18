import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsIonic16Icon],svg[nonicons-ionic-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 2.25a5.75 5.75 0 1 0 5.723 5.19a.75.75 0 0 1 1.493-.144q.034.348.034.704a7.25 7.25 0 1 1-3.513-6.214a.75.75 0 1 1-.774 1.285A5.7 5.7 0 0 0 8 2.25"></svg:path><svg:path d="M8 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m5.5-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class NoniconsIonic16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
