import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsPrisma16Icon],svg[nonicons-prisma-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.214 2.043a.25.25 0 0 0-.428 0l-5.564 9.141a.25.25 0 0 0 .109.357l5.564 2.583a.25.25 0 0 0 .21 0l5.564-2.583a.25.25 0 0 0 .109-.357zm-1.709-.78a1.75 1.75 0 0 1 2.99 0l5.564 9.141a1.75 1.75 0 0 1-.758 2.497l-5.564 2.584a1.75 1.75 0 0 1-1.474 0L1.699 12.9a1.75 1.75 0 0 1-.758-2.497z"></svg:path>`,
})
export class NoniconsPrisma16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
