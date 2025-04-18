import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8UpArrowIcon],svg[icons8-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.094l-.72.687l-8.5 8.5l1.44 1.44L15 7.936V28h2V7.937l6.78 6.782l1.44-1.44l-8.5-8.5z"></svg:path>`,
})
export class Icons8UpArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
