import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHipster2Icon],svg[icomoon-free-hipster2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3.497 6.615A1.5 1.5 0 0 1 8 9.5a1.5 1.5 0 0 1-.497 1.115C6.151 11.842 3 10.586 3 9c.969.625 1.726.153 2.439-.561a1.5 1.5 0 0 1 2.56 1.06a1.5 1.5 0 0 1 2.56-1.06c.713.714 1.471 1.186 2.439.561c0 1.586-3.151 2.842-4.503 1.615z"></svg:path>`,
})
export class IcomoonFreeHipster2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
