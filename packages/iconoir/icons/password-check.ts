import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPasswordCheckIcon],svg[iconoir-password-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7m2.5 2.5l2 2l4-4M12 11.01l.01-.011m3.99.011l.01-.011M8 11.01l.01-.011"></svg:path>`,
})
export class IconoirPasswordCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
