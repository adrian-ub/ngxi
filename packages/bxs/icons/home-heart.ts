import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsHomeHeartIcon],svg[bxs-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 .913-.593a1 1 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14m5.653-2.359a2.224 2.224 0 0 1 3.125 0l.224.22l.223-.22a2.225 2.225 0 0 1 3.126 0a2.13 2.13 0 0 1 0 3.07L12.002 18l-3.349-3.289a2.13 2.13 0 0 1 0-3.07"></svg:path>`,
})
export class BxsHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
