import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStatusIcon],svg[pajamas-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.941 7.033a8 8 0 0 1-14.784 5.112a.75.75 0 1 1 1.283-.778a6.5 6.5 0 1 0 8.922-8.93a.75.75 0 0 1 .776-1.284a8 8 0 0 1 3.803 5.88M9 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2.804 5a1 1 0 1 0-1.732-1a1 1 0 0 0 1.732 1M1 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4-4.196a1 1 0 1 0-1-1.732a1 1 0 0 0 1 1.732" clip-rule="evenodd"></svg:path>`,
})
export class PajamasStatusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
