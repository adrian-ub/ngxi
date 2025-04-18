import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMagnetSolidIcon],svg[iconoir-magnet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path d="M20 7.25a.75.75 0 0 1 .75.75v4.296c0 4.696-3.944 8.454-8.75 8.454s-8.75-3.758-8.75-8.454V8A.75.75 0 0 1 4 7.25h5.63a.75.75 0 0 1 .75.75v2.818c0 .734.665 1.432 1.62 1.432s1.62-.698 1.62-1.432V8a.75.75 0 0 1 .75-.75z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h5.63a.75.75 0 0 1 .75.75v6.818c0 .734.665 1.432 1.62 1.432s1.62-.698 1.62-1.432V4a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-4.88v6.068c0 1.677-1.456 2.932-3.12 2.932s-3.12-1.255-3.12-2.932V4.75H4A.75.75 0 0 1 3.25 4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 9.75A.75.75 0 0 1 3.25 9V4a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75m16 0a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirMagnetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
