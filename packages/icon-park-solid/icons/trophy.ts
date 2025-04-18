import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrophyIcon],svg[icon-park-solid-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 30c6.627 0 12-5.53 12-12.353V4H12v13.647C12 24.47 17.373 30 24 30Z"></svg:path><svg:path stroke-linecap="round" d="M12 21V11H4c0 6.667 4 10 8 10m24 0V11h8c0 6.667-4 10-8 10" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 32v4"></svg:path><svg:path fill="currentColor" d="m15 42l3.69-6h10.353L33 42z"></svg:path></svg:g>`,
})
export class IconParkSolidTrophyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
