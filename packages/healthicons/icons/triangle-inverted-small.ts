import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedSmallIcon],svg[healthicons-triangle-inverted-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.106 34.532c.169.287.515.468.894.468s.725-.181.894-.468l12-20.307a.735.735 0 0 0-.043-.824c-.183-.25-.504-.401-.851-.401H12c-.347 0-.668.152-.85.401a.735.735 0 0 0-.044.824z"></svg:path>`,
})
export class HealthiconsTriangleInvertedSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
