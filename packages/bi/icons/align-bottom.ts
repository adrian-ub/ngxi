import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biAlignBottomIcon],svg[bi-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="4" height="12" x="6" y="1" rx="1"></svg:rect><svg:path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"></svg:path></svg:g>`,
})
export class BiAlignBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
