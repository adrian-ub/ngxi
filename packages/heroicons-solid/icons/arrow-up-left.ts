import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidArrowUpLeftIcon],svg[heroicons-solid-arrow-up-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.78 16.78a.75.75 0 0 1-1.06 0L4.5 5.56v7.69a.75.75 0 0 1-1.5 0v-9.5A.75.75 0 0 1 3.75 3h9.5a.75.75 0 0 1 0 1.5H5.56l11.22 11.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidArrowUpLeftIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
