import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSortUpFillIcon],svg[prime-sort-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 7.97a.75.75 0 0 0-1.06 0l-7 7A.75.75 0 0 0 5 16.25h14a.75.75 0 0 0 .53-1.28z"></svg:path>`,
})
export class PrimeSortUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
