import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirClosedCaptionsTagIcon],svg[iconoir-closed-captions-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" d="m10.5 10l-.172-.172a2.83 2.83 0 0 0-2-.828v0A2.83 2.83 0 0 0 5.5 11.828v.344A2.83 2.83 0 0 0 8.328 15v0c.75 0 1.47-.298 2-.828L10.5 14m8-4l-.172-.172a2.83 2.83 0 0 0-2-.828v0a2.83 2.83 0 0 0-2.828 2.828v.344A2.83 2.83 0 0 0 16.328 15v0c.75 0 1.47-.298 2-.828L18.5 14"></svg:path></svg:g>`,
})
export class IconoirClosedCaptionsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
