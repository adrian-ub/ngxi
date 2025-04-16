import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPlusSmall20SolidIcon],svg[heroicons-plus-small-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5z"></svg:path>`,
})
export class HeroiconsPlusSmall20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
