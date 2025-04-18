import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNotebookIcon],svg[fluent-emoji-flat-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#533566" d="M8 26h19V4a2 2 0 0 0-2-2H8z"></svg:path><svg:path fill="#D3D3D3" d="M6 27h21v2H6z"></svg:path><svg:path fill="#fff" d="M12.5 7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"></svg:path><svg:path fill="#321B41" d="M6.5 2A1.5 1.5 0 0 0 5 3.5V28h1a1 1 0 0 1 1-1h1V2z"></svg:path><svg:path fill="#6B438B" d="M6.5 26A1.5 1.5 0 0 0 5 27.5v1A1.5 1.5 0 0 0 6.5 30h19a1.5 1.5 0 0 0 1.415-1H7a1 1 0 1 1 0-2h20v-1z"></svg:path><svg:path fill="#6B438B" d="M23 2h1v28h-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNotebookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
