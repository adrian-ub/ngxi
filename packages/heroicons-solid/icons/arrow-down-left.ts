import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidArrowDownLeftIcon],svg[heroicons-solid-arrow-down-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.78 3.22a.75.75 0 0 0-1.06 0L4.5 14.44V6.75a.75.75 0 0 0-1.5 0v9.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 0-1.5H5.56L16.78 4.28a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidArrowDownLeftIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
