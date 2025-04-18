import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTimesDuotoneIcon],svg[stash-times-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 7.05a1 1 0 0 1 1.414 0L12 10.586l3.536-3.536a1 1 0 1 1 1.414 1.414L13.414 12l3.536 3.536a1 1 0 1 1-1.414 1.414L12 13.414L8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12L7.05 8.464a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class StashTimesDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
