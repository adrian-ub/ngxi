import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConstellationIcon],svg[hugeicons-constellation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4-16a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10.298-4.127l-1.595 4.254m.418-5.443L5.88 7.316m5.872 6.669l-.504 4.03m2.541-5.12l4.422 2.21m-.04 1.707l-5.343 2.375" color="currentColor"></svg:path>`,
})
export class HugeiconsConstellationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
