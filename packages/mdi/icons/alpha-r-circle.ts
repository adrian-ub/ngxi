import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaRCircleIcon],svg[mdi-alpha-r-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h2v-4h.8l1.2 4h2l-1.24-4.15C14.5 12.55 15 11.84 15 11V9a2 2 0 0 0-2-2zm2 2h2v2h-2zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiAlphaRCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
