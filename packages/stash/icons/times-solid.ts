import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTimesSolidIcon],svg[stash-times-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.127 6.873a1.25 1.25 0 0 1 0 1.768L13.767 12l3.36 3.359a1.25 1.25 0 1 1-1.768 1.768L12 13.767l-3.359 3.36a1.25 1.25 0 1 1-1.768-1.768L10.233 12l-3.36-3.359a1.25 1.25 0 0 1 1.768-1.768L12 10.233l3.359-3.36a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class StashTimesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
