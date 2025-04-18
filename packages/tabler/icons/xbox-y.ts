import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXboxYIcon],svg[tabler-xbox-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9M9 8l3 4"></svg:path><svg:path d="m15 8l-2.988 3.984L12 16"></svg:path></svg:g>`,
})
export class TablerXboxYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
