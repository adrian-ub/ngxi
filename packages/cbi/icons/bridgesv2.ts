import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiBridgesv2Icon],svg[cbi-bridgesv2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8a1 1 0 1 1 0-2a1 1 0 1 1 0 2m-6 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 10c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6M9 7a1 1 0 1 1 2 0a1 1 0 1 1-2 0m7-1a1 1 0 1 1 0 2a1 1 0 1 1 0-2m8-2H8C5.8 4 4 5.8 4 8v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class CbiBridgesv2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
