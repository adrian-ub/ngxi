import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHashtagIcon],svg[iconoir-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 3L6 21m14.5-5h-18M22 7H4m14-4l-4 18"></svg:path>`,
})
export class IconoirHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
