import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFramerIcon],svg[gg-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M12 21V9H6v6z"></svg:path><svg:path d="M18 9V3H6l6 6H6v6h12l-6-6z"></svg:path></svg:g>`,
})
export class GgFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
