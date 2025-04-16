import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsUnderlineSolidIcon],svg[heroicons-underline-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.995 2.994a.75.75 0 0 1 .75.75v7.5a5.25 5.25 0 1 0 10.5 0v-7.5a.75.75 0 0 1 1.5 0v7.5a6.75 6.75 0 1 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75m-3 17.252a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsUnderlineSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
