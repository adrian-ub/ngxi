import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGlassIcon],svg[gg-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 10a5 5 0 0 1-4 4.9V17h2v2H9v-2h2v-2.1A5 5 0 0 1 7 10V5h10zm-2-3H9v3a3 3 0 1 0 6 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
