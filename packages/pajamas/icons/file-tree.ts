import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasFileTreeIcon],svg[pajamas-file-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0-1.5 0v8.5a3 3 0 0 0 3 3h3V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.75H4a1.5 1.5 0 0 1-1.5-1.5V6.849c.441.255.954.401 1.5.401h3V8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.75H4a1.5 1.5 0 0 1-1.5-1.5zm11 11.75h-5v-2h5zm-5-6v-2h5v2z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasFileTreeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
