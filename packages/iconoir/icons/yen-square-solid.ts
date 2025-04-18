import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirYenSquareSolidIcon],svg[iconoir-yen-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm4.4 10a.75.75 0 0 0 0 1.5h3.25v.5H8a.75.75 0 0 0 0 1.5h3.25V18a.75.75 0 0 0 1.5 0v-2.25H16a.75.75 0 0 0 0-1.5h-3.25v-.5H16a.75.75 0 0 0 0-1.5h-2.89l3.497-4.809a.75.75 0 0 0-1.214-.882L12 11.225L8.607 6.559a.75.75 0 1 0-1.214.882l3.498 4.809z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirYenSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
