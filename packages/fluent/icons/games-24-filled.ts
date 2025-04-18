import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGames24FilledIcon],svg[fluent-games-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.998 5a7 7 0 0 1 .24 13.996l-.24.004H9.002a7 7 0 0 1-.24-13.996L9.001 5zm-.248 7.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M8 9a.75.75 0 0 0-.743.648l-.007.102v1.498h-1.5a.75.75 0 0 0-.102 1.494l.102.007l1.5-.001v1.502a.75.75 0 0 0 1.493.102l.007-.102v-1.502h1.5a.75.75 0 0 0 .102-1.492l-.102-.007l-1.5-.001V9.75A.75.75 0 0 0 8 9m8.75 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path>`,
})
export class FluentGames24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
