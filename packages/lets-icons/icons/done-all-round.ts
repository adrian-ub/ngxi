import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllRoundIcon],svg[lets-icons-done-all-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m11.19 12.237l4.584-5.604a1 1 0 0 0-1.548-1.266l-4.573 5.59zm-3.167 3.87l-1.537-1.28l-.653.798L2.6 13.2a1 1 0 0 0-1.2 1.6l3.233 2.425a2 2 0 0 0 2.748-.334z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
