import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBookmarkIcon],svg[fa-solid-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400z"></svg:path>`,
})
export class FaSolidBookmarkIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
