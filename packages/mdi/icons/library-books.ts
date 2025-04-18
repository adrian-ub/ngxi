import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLibraryBooksIcon],svg[mdi-library-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 7H9V5h10m-4 10H9v-2h6m4-2H9V9h10m1-7H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6z" fill="currentColor"></svg:path>`,
})
export class MdiLibraryBooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
