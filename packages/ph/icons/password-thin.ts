import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPasswordThinIcon],svg[ph-password-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0m97.2 58.31l-25.2 8.18V96a4 4 0 0 0-8 0v26.49l-25.2-8.18a4 4 0 0 0-2.47 7.61l25.2 8.18L90 151.54a4 4 0 1 0 6.47 4.7L112 134.81l15.57 21.43a4 4 0 0 0 3.24 1.65a4 4 0 0 0 3.23-6.35l-15.57-21.44l25.2-8.18a4 4 0 0 0-2.47-7.61m101 2.57a4 4 0 0 0-5-2.57l-25.2 8.18V96a4 4 0 0 0-8 0v26.49l-25.2-8.18a4 4 0 0 0-2.47 7.61l25.2 8.18L186 151.54a4 4 0 1 0 6.47 4.7L208 134.81l15.57 21.43a4 4 0 0 0 3.24 1.65a4 4 0 0 0 3.23-6.35l-15.57-21.44l25.2-8.18a4 4 0 0 0 2.57-5.04Z"></svg:path>`,
})
export class PhPasswordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
