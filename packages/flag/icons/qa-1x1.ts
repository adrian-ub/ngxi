import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagQa1x1Icon],svg[flag-qa-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d1b3d" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 0v512h113l104.2-28.4L113 455l104.2-28.4L113 398.2l104.2-28.4L113 341.3L217.2 313L113 284.4L217.2 256L113 227.6L217.2 199L113 170.7l104.2-28.5L113 113.8l104.2-28.5L113 57l104.2-28.4L113 0z"></svg:path>`,
})
export class FlagQa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
