import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls1Icon],svg[ls-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h175v735h-73V71H0z"></svg:path>`,
})
export class Ls1Icon {
  readonly viewBox = input("0 0 175 735")
  readonly width = input("0.24em")
  readonly height = input("1em")
}
