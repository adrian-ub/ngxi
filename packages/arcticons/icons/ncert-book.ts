import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNcertBookIcon],svg[arcticons-ncert-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.292 14.785v-5.41h1.758a1.826 1.826 0 0 1 0 3.652h-1.758m1.825-.005l1.758 1.825m-18.21 0V9.438l3.583 5.409V9.438m5.214 3.584a1.82 1.82 0 0 1-1.825 1.825h0a1.82 1.82 0 0 1-1.826-1.825v-1.826a1.82 1.82 0 0 1 1.826-1.825h0a1.76 1.76 0 0 1 1.757 1.825h0m1.631 3.651h2.704m-2.704-5.409h2.704m-2.704 2.705h1.758m-1.758-2.705v5.409m9.056-5.409h3.584m-1.758 5.409V9.438M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.73 4.5v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class ArcticonsNcertBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
