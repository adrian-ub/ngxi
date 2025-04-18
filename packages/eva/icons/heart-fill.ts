import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaHeartFillIcon],svg[eva-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4a5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0a5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21"></svg:path>`,
})
export class EvaHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
