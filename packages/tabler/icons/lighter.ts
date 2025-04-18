import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLighterIcon],svg[tabler-lighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path><svg:path d="m16 4l1.465 1.638a2 2 0 1 1-3.015.099z"></svg:path></svg:g>`,
})
export class TablerLighterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
