import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidUserRemoveIcon],svg[heroicons-solid-user-remove-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m3 11a6 6 0 0 0-12 0zm-1-9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path>`,
})
export class HeroiconsSolidUserRemoveIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
