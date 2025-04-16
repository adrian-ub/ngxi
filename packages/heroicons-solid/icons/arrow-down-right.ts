import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidArrowDownRightIcon],svg[heroicons-solid-arrow-down-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L14.44 15.5H6.75a.75.75 0 0 0 0 1.5h9.5a.747.747 0 0 0 .75-.75v-9.5a.75.75 0 0 0-1.5 0v7.69L4.28 3.22Z"></svg:path>`,
})
export class HeroiconsSolidArrowDownRightIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
