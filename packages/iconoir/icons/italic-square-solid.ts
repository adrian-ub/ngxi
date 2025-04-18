import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirItalicSquareSolidIcon],svg[iconoir-italic-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zM16 6.75h-1.46l-3.5 10.5H12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h1.46l3.5-10.5H12a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirItalicSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
