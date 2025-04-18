import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsIncognito2Icon],svg[humbleicons-incognito-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0l.211-.106a4 4 0 0 1 3.578 0L14 7.5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m-2 6.303c5-3 5 3.5 9 1.767c-1 4.233-6 4.233-9 1.233c-3 3-8 3-9-1.233c4 1.733 4-4.767 9-1.767"></svg:path>`,
})
export class HumbleiconsIncognito2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
