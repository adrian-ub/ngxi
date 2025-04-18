import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSchoolBuildingOutlineIcon],svg[bubbles-school-building-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.348 25H1.522A.52.52 0 0 1 1 24.478v-9.391a.52.52 0 0 1 .522-.522h6.782m9.392 0h6.782a.52.52 0 0 1 .522.522v9.391a.52.52 0 0 1-.522.522h-7.826"></svg:path><svg:path d="M19.783 16.652h3.13v2.087h-3.13zm3.13 6.261h-3.13v-1.565a.52.52 0 0 1 .521-.522h2.087a.52.52 0 0 1 .522.522zM3.087 16.652h3.13v2.087h-3.13zm0 4.174h3.13v2.087h-3.13zm11.478-.522a1.565 1.565 0 1 0-3.13 0V25h3.13zM12.478 7.29V4.13m0-3.13h4.174a.52.52 0 0 1 .522.522v2.087a.52.52 0 0 1-.522.521h-4.174zm-1.043 10.957a1.566 1.566 0 1 0 3.13 0a1.566 1.566 0 0 0-3.13 0"></svg:path><svg:path d="M17.696 11.957a4.696 4.696 0 0 0-9.392 0V25h9.392z"></svg:path></svg:g>`,
})
export class BubblesSchoolBuildingOutlineIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
