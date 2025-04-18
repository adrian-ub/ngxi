import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biAlignTopIcon],svg[bi-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"></svg:rect><svg:path d="M1.5 2a.5.5 0 0 1 0-1zm13-1a.5.5 0 0 1 0 1zm-13 0h13v1h-13z"></svg:path></svg:g>`,
})
export class BiAlignTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
