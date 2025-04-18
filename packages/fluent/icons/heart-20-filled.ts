import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeart20FilledIcon],svg[fluent-heart-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.388 4.29a4.3 4.3 0 0 0-6.127-.016c-1.688 1.705-1.68 4.476.016 6.189l6.277 6.34c.26.263.682.263.942 0l6.245-6.304a4.41 4.41 0 0 0-.017-6.187a4.305 4.305 0 0 0-6.135-.015l-.596.603z"></svg:path>`,
})
export class FluentHeart20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
