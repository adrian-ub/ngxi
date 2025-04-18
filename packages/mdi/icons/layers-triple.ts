import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersTripleIcon],svg[mdi-layers-triple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L3 7l1.63 1.27L12 14l7.36-5.73L21 7zm7.37 10.73L12 16.47l-7.38-5.73L3 12l9 7l9-7zm0 5L12 21.47l-7.38-5.73L3 17l9 7l9-7z"></svg:path>`,
})
export class MdiLayersTripleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
