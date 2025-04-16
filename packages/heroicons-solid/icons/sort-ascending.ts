import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidSortAscendingIcon],svg[heroicons-solid-sort-ascending-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm10 5a1 1 0 1 0 2 0v-5.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L13 10.414z"></svg:path>`,
})
export class HeroiconsSolidSortAscendingIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
