import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPentagonIcon],svg[mdi-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L2 9.8l3.8 11.7h12.4L22 9.8z"></svg:path>`,
})
export class MdiPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
