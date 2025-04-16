import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidPencilIcon],svg[heroicons-solid-pencil-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793l-2.828-2.828zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379z"></svg:path>`,
})
export class HeroiconsSolidPencilIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
