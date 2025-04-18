import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCameraIcon],svg[charm-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 4.75v8.5h12.5v-8.5h-3l-1.5-2h-3.5l-1.5 2z"></svg:path><svg:circle cx="8" cy="8.5" r="2.25"></svg:circle></svg:g>`,
})
export class CharmCameraIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
