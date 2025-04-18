import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBoldIcon],svg[iconoir-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 11.667H8m4 0s3.333 0 3.333-3.334S12 5 12 5H8.6a.6.6 0 0 0-.6.6v6.067m4 0s4 0 4 3.666S12 19 12 19H8.6a.6.6 0 0 1-.6-.6v-6.733"></svg:path>`,
})
export class IconoirBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
