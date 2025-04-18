import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSkipPrevSolidIcon],svg[iconoir-skip-prev-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 7v10"></svg:path><svg:path fill="currentColor" d="M17.028 5.267a.6.6 0 0 1 .972.471v12.524a.6.6 0 0 1-.972.47l-7.931-6.261a.6.6 0 0 1 0-.942z"></svg:path></svg:g>`,
})
export class IconoirSkipPrevSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
