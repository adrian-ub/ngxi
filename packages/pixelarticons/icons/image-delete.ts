import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageDeleteIcon],svg[pixelarticons-image-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H2v18h20V11h-2v8H4V5h10zM6 7h2v2H6zm14-2h-2V3h-2v2h2v2h-2v2h2V7h2v2h2V7h-2zm0 0V3h2v2zm-8 4h2v2h-2zm-2 4v-2h2v2zm-2 2h2v-2H8zm0 0v2H6v-2zm8-2h-2v-2h2zm0 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsImageDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
