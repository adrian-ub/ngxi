import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsNext16Icon],svg[nonicons-next-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 3.65 11.88L6 6.577v4.673a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 1.327-.48l7.474 9a.75.75 0 0 1-.088 1.049a8 8 0 1 1 2.12-2.865a.75.75 0 1 1-1.375-.602A6.45 6.45 0 0 0 14.5 8A6.5 6.5 0 0 0 8 1.5m2.5 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class NoniconsNext16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
