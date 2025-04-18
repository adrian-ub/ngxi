import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsArchIcon],svg[bx-bxs-arch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 8V6H3v14H2v2h6v-7c0-.163.046-4 4-4c3.821 0 3.993 3.602 4 4v7h6v-2h-1V8zM2 2h20v2H2z" fill="currentColor"></svg:path>`,
})
export class BxBxsArchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
