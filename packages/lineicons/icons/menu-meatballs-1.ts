import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuMeatballs1Icon],svg[lineicons-menu-meatballs-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.313 13.756a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75m12 0a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75m-7.75-1.75a1.75 1.75 0 1 0 3.5 0v-.01a1.75 1.75 0 0 0-3.5 0z"></svg:path>`,
})
export class LineiconsMenuMeatballs1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
