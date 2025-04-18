import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmbyIcon],svg[arcticons-emby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.25 3.5L11.12 14.63l1.75 1.75l-9.37 9.37l11.13 11.13l1.75-1.75l9.37 9.37l11.13-11.13l-1.75-1.75l9.37-9.37l-11.13-11.13l-1.75 1.75Zm-3 12.81l6.86 3.84L33 24l-6.85 3.85l-6.86 3.84V16.31Z"></svg:path>`,
})
export class ArcticonsEmbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
