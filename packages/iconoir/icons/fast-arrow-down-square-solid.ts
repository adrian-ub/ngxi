import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowDownSquareSolidIcon],svg[iconoir-fast-arrow-down-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 20.4a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35V3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35zm-9.22-8.87l3.5-3.5a.75.75 0 0 0-1.06-1.06L12 9.94L9.03 6.97a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0m3.5 2.5l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L12 15.94l2.97-2.97a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFastArrowDownSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
