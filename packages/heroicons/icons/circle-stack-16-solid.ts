import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCircleStack16SolidIcon],svg[heroicons-circle-stack-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3"></svg:path><svg:path fill="currentColor" d="M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.3 6.3 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5"></svg:path><svg:path fill="currentColor" d="M8 12.5c1.84 0 3.579-.37 4.914-1.037c.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5"></svg:path>`,
})
export class HeroiconsCircleStack16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
