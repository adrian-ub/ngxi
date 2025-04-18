import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsInfinityIcon],svg[proicons-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M3.872 9.172a3.72 3.72 0 0 1 5.419 0L12 12l-2.71 2.828a3.72 3.72 0 0 1-5.418 0c-1.496-1.562-1.496-4.094 0-5.656Zm16.256 0a3.72 3.72 0 0 0-5.419 0L12 12l2.71 2.828a3.72 3.72 0 0 0 5.418 0c1.496-1.562 1.496-4.094 0-5.656Z"></svg:path>`,
})
export class ProiconsInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
