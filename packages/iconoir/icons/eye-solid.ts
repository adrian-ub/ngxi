import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEyeSolidIcon],svg[iconoir-eye-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 13c3.6-8 14.4-8 18 0"></svg:path><svg:path fill="currentColor" d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconoirEyeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
