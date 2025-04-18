import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaMailOutlineIcon],svg[cuida-mail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="mail-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M6 5h12a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></svg:path><svg:path d="M3.643 6.986a1 1 0 0 1 1.372-.343l6.47 3.882a1 1 0 0 0 1.03 0l6.47-3.882a1 1 0 0 1 1.03 1.715l-6.472 3.882a3 3 0 0 1-3.086 0L3.984 8.358a1 1 0 0 1-.342-1.372Z"></svg:path></svg:g></svg:g>`,
})
export class CuidaMailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
