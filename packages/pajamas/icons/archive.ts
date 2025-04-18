import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasArchiveIcon],svg[pajamas-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 4.5v-2h13v2zM1 6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1.5 0v7.5h11V6zM4 8.75A.75.75 0 0 1 4.75 8h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8.75" clip-rule="evenodd"></svg:path>`,
})
export class PajamasArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
