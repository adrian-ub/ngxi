import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsTvSharpIcon],svg[famicons-tv-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 384H24a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h464a8 8 0 0 1 8 8v288a8 8 0 0 1-8 8"></svg:path><svg:rect width="288" height="32" x="112" y="400" fill="currentColor" rx="4" ry="4"></svg:rect>`,
})
export class FamiconsTvSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
