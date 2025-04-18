import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftSquareSolidIcon],svg[iconoir-arrow-up-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm10.521 6.171h-4.95a.75.75 0 0 0-.75.75v4.95a.75.75 0 0 0 1.5 0v-3.139l4.377 4.377a.75.75 0 1 0 1.06-1.061L10.983 9.92h3.14a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
