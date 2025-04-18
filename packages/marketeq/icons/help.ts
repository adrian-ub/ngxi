import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHelpIcon],svg[marketeq-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m30.02 7.458l-2.582 9m-7.458-9l2.582 9m19.98 13.562l-9-2.582m9-7.458l-9 2.582M19.98 42.542l2.582-9m7.458 9l-2.582-9M7.458 19.98l9 2.582m-9 7.458l9-2.582"></svg:path><svg:path stroke="#306CFE" d="M43.75 25a18.75 18.75 0 1 1-37.5 0a18.75 18.75 0 0 1 37.5 0M25 16.667a8.333 8.333 0 1 0 0 16.665a8.333 8.333 0 0 0 0-16.665"></svg:path></svg:g>`,
})
export class MarketeqHelpIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
