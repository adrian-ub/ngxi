import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsUikitIcon],svg[simple-icons-uikit-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.697 3.292l-4.109 2.489l4.738 2.696v7.077l-6.365 3.538l-6.258-3.538v-5.485L1.596 7.956V18l10.219 6l10.589-6V6.002zm-1.904-.989L11.813 0L7.665 2.568l4.032 2.218z"></svg:path>`,
})
export class SimpleIconsUikitIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
