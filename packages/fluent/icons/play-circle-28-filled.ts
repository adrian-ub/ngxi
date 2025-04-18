import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlayCircle28FilledIcon],svg[fluent-play-circle-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m-1.234 7.278l6.505 3.862a1 1 0 0 1 0 1.72l-6.505 3.862a1.5 1.5 0 0 1-2.266-1.29v-6.864a1.5 1.5 0 0 1 2.266-1.29"></svg:path>`,
})
export class FluentPlayCircle28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
