import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsContraceptivePatchIcon],svg[healthicons-contraceptive-patch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 14a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8zm23.9 2.1H18.1a2 2 0 0 0-2 2v11.8a2 2 0 0 0 2 2h11.8a2 2 0 0 0 2-2V18.1a2 2 0 0 0-2-2m-11.8-2a4 4 0 0 0-4 4v11.8a4 4 0 0 0 4 4h11.8a4 4 0 0 0 4-4V18.1a4 4 0 0 0-4-4zm2.3 5.4a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m2.7 1.8a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m-4.5.9a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m2.7 1.8a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m.9 3.6a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m-2.7-.9a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m.9 3.6a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m4.5-11.7a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m.9 3.6a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m-.9 1.8a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m.9 3.6a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m-.9 1.8a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m2.7-9.9a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m2.7 1.8a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m-2.7 3.6a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m2.7 1.8a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m-2.7 3.6a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsContraceptivePatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
