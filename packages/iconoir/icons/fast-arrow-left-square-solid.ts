import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowLeftSquareSolidIcon],svg[iconoir-fast-arrow-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm8.87 9.22l3.5-3.5a.75.75 0 1 1 1.06 1.06L14.06 12l2.97 2.97a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06m-2.5-3.5l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L8.06 12l2.97-2.97a.75.75 0 1 0-1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFastArrowLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
