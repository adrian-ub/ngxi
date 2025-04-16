import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidEllipsisHorizontalCircleIcon],svg[heroicons-solid-ellipsis-horizontal-circle-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidEllipsisHorizontalCircleIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
