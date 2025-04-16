import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBattery5020SolidIcon],svg[heroicons-battery-50-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.75 8a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75H9.5a.75.75 0 0 0 .75-.75v-2.5A.75.75 0 0 0 9.5 8z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 5A2.25 2.25 0 0 0 1 7.25v5.5A2.25 2.25 0 0 0 3.25 15h12.5A2.25 2.25 0 0 0 18 12.75v-1.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V7.25A2.25 2.25 0 0 0 15.75 5zM2.5 7.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsBattery5020SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
