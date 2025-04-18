import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNumber1SquareSolidIcon],svg[iconoir-number-1-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zM13.75 8a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirNumber1SquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
