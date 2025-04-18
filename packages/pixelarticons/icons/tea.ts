import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTeaIcon],svg[pixelarticons-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v7h-4v5H4zm14 5h2V6h-2zm-2-3h-4v2h2v4H8V8h2V6H6v8h10zm3 12v2H3v-2z"></svg:path>`,
})
export class PixelarticonsTeaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
