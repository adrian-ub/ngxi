import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaKCircleOutlineIcon],svg[mdi-alpha-k-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v3.33L13 7h2l-3 5l3 5h-2l-2-3.33V17H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiAlphaKCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
