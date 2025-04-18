import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHurricaneIcon],svg[mdi-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 6.79A6 6 0 0 1 18 12C18 22 6 22 6 22a17.7 17.7 0 0 0 3.34-3.29a1 1 0 0 0-.34-1.5A6 6 0 0 1 6 12C6 2 18 2 18 2a17.699 17.699 0 0 0-3.34 3.29a1.002 1.002 0 0 0 .34 1.5zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path>`,
})
export class MdiHurricaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
