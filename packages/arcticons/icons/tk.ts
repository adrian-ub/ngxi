import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTkIcon],svg[arcticons-tk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 8.75h23.72v7.78H20.9v11.34h-9.08V16.53H4.5Zm27.78 7.75H43.5L32.12 27.87L43.5 39.25H32.28L20.9 27.87Zm0 0"></svg:path>`,
})
export class ArcticonsTkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
