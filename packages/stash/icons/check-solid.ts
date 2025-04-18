import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCheckSolidIcon],svg[stash-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.69 7.776a1 1 0 0 1 .034 1.414l-7.39 7.76l-4.058-4.26a1 1 0 0 1 1.448-1.38l2.61 2.74l5.942-6.24a1 1 0 0 1 1.414-.034"></svg:path>`,
})
export class StashCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
