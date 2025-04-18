import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsNametagIcon],svg[gridicons-nametag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-6 8h12v3H6zm14-8h-4V3H8v3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10 5h4v5h-4zm10 14H4v-9h4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h4z"></svg:path>`,
})
export class GridiconsNametagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
