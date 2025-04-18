import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSkipNextSolidIcon],svg[iconoir-skip-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 7v10"></svg:path><svg:path fill="currentColor" d="M6.972 5.267A.6.6 0 0 0 6 5.738v12.524a.6.6 0 0 0 .972.47l7.931-6.261a.6.6 0 0 0 0-.942z"></svg:path></svg:g>`,
})
export class IconoirSkipNextSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
