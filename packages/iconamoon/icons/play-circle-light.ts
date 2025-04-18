import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlayCircleLightIcon],svg[iconamoon-play-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round"></svg:circle><svg:path d="m14 12l-3 1.732v-3.464z"></svg:path></svg:g>`,
})
export class IconamoonPlayCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
