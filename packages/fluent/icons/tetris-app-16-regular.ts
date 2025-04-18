import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTetrisApp16RegularIcon],svg[fluent-tetris-app-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2zm6 0H9v2h2zM8 3H6v2h2zM3 6v2h2V6zm5 0H6v2h2zm2 2.067a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5zM13 10V8.067h-2V10zm-2 3h2v-2h-2zm-3-2v2h2v-2zm-1 0H5v2h2z"></svg:path>`,
})
export class FluentTetrisApp16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
