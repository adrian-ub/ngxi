import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSquareCursorSolidIcon],svg[iconoir-square-cursor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"></svg:path><svg:path fill="currentColor" d="M20.879 16.918c.494.304.463 1.043-.045 1.1l-2.567.292l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z"></svg:path></svg:g>`,
})
export class IconoirSquareCursorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
