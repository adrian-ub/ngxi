import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXboxAIcon],svg[tabler-xbox-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9"></svg:path><svg:path d="m15 16l-3-8l-3 8m5-2h-4"></svg:path></svg:g>`,
})
export class TablerXboxAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
