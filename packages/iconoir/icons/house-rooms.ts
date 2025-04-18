import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHouseRoomsIcon],svg[iconoir-house-rooms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11 19v2m0-9v4m5-4v4h-2m7-4H8m-3 0H3m0-7l9-2l9 2"></svg:path><svg:path d="M21 8.6v11.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirHouseRoomsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
