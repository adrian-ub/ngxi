import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookEducationIcon],svg[mdi-book-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.82 17L13 19.28V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.54l-1.5-.82zM24 17l-5.5-3l-5.5 3l5.5 3zm-9 2.09v2L18.5 23l3.5-1.91v-2L18.5 21z"></svg:path>`,
})
export class MdiBookEducationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
