import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBlitzIcon],svg[catppuccin-blitz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M12.43 7.5h-2.36c-.9 0-1.74-.41-2.28-1.12L5.47 3.5l1.5-3zm-8.96 1h2.35c.9 0 1.74.41 2.28 1.12l2.33 2.88l-1.5 3z"></svg:path>`,
})
export class CatppuccinBlitzIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
