import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonAddSharpIcon],svg[famicons-person-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54z"></svg:path><svg:circle cx="288" cy="144" r="112" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class FamiconsPersonAddSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
