import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPictureInPictureTopIcon],svg[tabler-picture-in-picture-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"></svg:path><svg:path d="M15 10h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class TablerPictureInPictureTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
