import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsBook3Icon],svg[duo-icons-book-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h11a2 2 0 0 1 2 2v12.99c0 .168-.038.322-.113.472l-.545 1.09a1 1 0 0 0 0 .895l.543 1.088A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM7 18h10.408a3 3 0 0 0 0 2H7a1 1 0 1 1 0-2" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsBook3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
