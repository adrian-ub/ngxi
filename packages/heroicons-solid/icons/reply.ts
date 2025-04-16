import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidReplyIcon],svg[heroicons-solid-reply-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.707 3.293a1 1 0 0 1 0 1.414L5.414 7H11a7 7 0 0 1 7 7v2a1 1 0 1 1-2 0v-2a5 5 0 0 0-5-5H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidReplyIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
