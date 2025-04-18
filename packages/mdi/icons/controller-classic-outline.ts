import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiControllerClassicOutlineIcon],svg[mdi-controller-classic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 7a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5c-1.71 0-3.23-.78-4.24-2h-2.52c-1.01 1.22-2.53 2-4.24 2A5.5 5.5 0 0 1 1 12.5A5.5 5.5 0 0 1 6.5 7zm-11 2A3.5 3.5 0 0 0 3 12.5A3.5 3.5 0 0 0 6.5 16c1.4 0 2.6-.82 3.16-2h4.68c.56 1.18 1.76 2 3.16 2a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17.5 9zm-.75 1.25h1.5v1.5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5zm11 2.25a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m2-2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiControllerClassicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
