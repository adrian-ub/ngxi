import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAnchorOffIcon],svg[tabler-anchor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v9m-8-8a8 8 0 0 0 14.138 5.13m1.44-2.56A8 8 0 0 0 20 13m1 0h-2M5 13H3m9.866-4.127a3 3 0 1 0-3.737-3.747M3 3l18 18"></svg:path>`,
})
export class TablerAnchorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
