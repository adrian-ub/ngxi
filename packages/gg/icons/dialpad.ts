import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDialpadIcon],svg[gg-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3h3v3h-3zm0 5h3v3h-3zm0 5v3h3v-3zm5-10h3v3h-3zm0 5v3h3V8zm0 5h3v3h-3zm0 5v3h3v-3zm5-15h3v3h-3zm0 5v3h3V8zm0 5h3v3h-3z"></svg:path>`,
})
export class GgDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
