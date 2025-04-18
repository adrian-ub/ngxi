import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailDeleteIcon],svg[pixelarticons-mail-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h12v-2H4V6h16v8h2V4zM6 8h2v2H6zm4 4H8v-2h2zm4 0v2h-4v-2zm2-2v2h-2v-2zm0 0V8h2v2zm2 6h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsMailDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
