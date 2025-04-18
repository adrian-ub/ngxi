import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkipNextIcon],svg[mdi-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18h2V6h-2M6 18l8.5-6L6 6z"></svg:path>`,
})
export class MdiSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
