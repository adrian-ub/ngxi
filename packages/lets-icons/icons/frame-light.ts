import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFrameLightIcon],svg[lets-icons-frame-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8 3v1c0 1.886 0 2.828-.586 3.414S5.886 8 4 8H3m13-5v1c0 1.886 0 2.828.586 3.414S18.114 8 20 8h1M8 21v-1c0-1.886 0-2.828-.586-3.414S5.886 16 4 16H3m13 5v-1c0-1.886 0-2.828.586-3.414S18.114 16 20 16h1"></svg:path>`,
})
export class LetsIconsFrameLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
