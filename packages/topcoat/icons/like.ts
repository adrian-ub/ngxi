import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatLikeIcon],svg[topcoat-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.938 10.725C14.51.796 1.5 6.205 1.5 17.021c0 8.122 17.836 20.827 19.438 22.479C22.551 37.848 39.5 25.143 39.5 17.021c0-10.734-12.122-16.225-18.562-6.296"></svg:path>`,
})
export class TopcoatLikeIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
