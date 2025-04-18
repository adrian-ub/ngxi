import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasListIndentIcon],svg[pajamas-list-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm2 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM.22 5.72a.75.75 0 0 1 1.06 0l1.75 1.75l.53.53l-.53.53l-1.75 1.75A.75.75 0 1 1 .22 9.22L1.44 8L.22 6.78a.75.75 0 0 1 0-1.06m4.53 5.78a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasListIndentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
