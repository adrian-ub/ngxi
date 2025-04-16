import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsStop16SolidIcon],svg[heroicons-stop-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="3" y="3" fill="currentColor" rx="1.5"></svg:rect>`,
})
export class HeroiconsStop16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
