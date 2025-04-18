import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconIterations16Icon],svg[octicon-iterations-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7.25a4.75 4.75 0 0 1 9.5 0a.75.75 0 0 0 1.5 0a6.25 6.25 0 1 0-6.25 6.25H12v2.146c0 .223.27.335.427.177l2.896-2.896a.25.25 0 0 0 0-.354l-2.896-2.896a.25.25 0 0 0-.427.177V12H7.25A4.75 4.75 0 0 1 2.5 7.25"></svg:path>`,
})
export class OcticonIterations16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
