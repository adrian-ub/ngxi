import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceNeutralIcon],svg[gravity-ui-face-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5 3a.75.75 0 0 0 0-1.5H6A.75.75 0 0 0 6 11zm0-3a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceNeutralIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
