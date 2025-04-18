import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodLaughOutlineIcon],svg[teenyicons-mood-laugh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7.5V7a.5.5 0 0 0-.5.5zm6 0h.5a.5.5 0 0 0-.5-.5zm0-.5h-6v1h6zm-3 4C9.47 11 11 9.47 11 7.5h-1C10 8.918 8.918 10 7.5 10zM4 7.5C4 9.47 5.53 11 7.5 11v-1C6.082 10 5 8.918 5 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 6h1V5H4zm6 0h1V5h-1z"></svg:path>`,
})
export class TeenyiconsMoodLaughOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
