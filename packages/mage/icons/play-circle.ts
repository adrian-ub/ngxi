import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlayCircleIcon],svg[mage-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M8.909 7.864v8.27a.909.909 0 0 0 1.463.717l5.725-4.452a.91.91 0 0 0-.055-1.473L10.317 7.11a.909.909 0 0 0-1.408.754"></svg:path></svg:g>`,
})
export class MagePlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
