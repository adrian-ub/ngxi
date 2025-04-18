import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeMarsIcon],svg[prime-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.5 4.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.076L15.55 9.57a6.75 6.75 0 1 1-1.054-1.067L17.954 5H16.25a.75.75 0 0 1-.75-.75M10.25 8.5a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5" clip-rule="evenodd"></svg:path>`,
})
export class PrimeMarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
