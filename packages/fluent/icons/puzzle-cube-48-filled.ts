import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzleCube48FilledIcon],svg[fluent-puzzle-cube-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6v10.5h10V6zm-2.5 13H6v10h10.5zM19 29V19h10v10zm-2.5 2.5H6v4.25A6.25 6.25 0 0 0 12.25 42h4.25zM19 42h10V31.5H19zm12.5 0V31.5H42v4.25A6.25 6.25 0 0 1 35.75 42zM42 19v10H31.5V19zm0-2.5v-4.25A6.25 6.25 0 0 0 35.75 6H31.5v10.5z"></svg:path>`,
})
export class FluentPuzzleCube48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
