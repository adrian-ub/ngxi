import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSurprisedSolidIcon],svg[teenyicons-mood-surprised-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm6 0h1V5h-1zM5 9a2 2 0 0 1 2-2h1a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodSurprisedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
