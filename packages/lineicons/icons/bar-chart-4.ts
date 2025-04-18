import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBarChart4Icon],svg[lineicons-bar-chart-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5.25a.75.75 0 0 0-1.5 0v12a2.25 2.25 0 0 0 2.25 2.25h17a.75.75 0 0 0 0-1.5h-17a.75.75 0 0 1-.75-.75z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 10.277a2 2 0 0 0-2 2v3.473c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-3.473a2 2 0 0 0-2-2m-.5 2a.5.5 0 0 1 1 0V15h-1zm4-5.777a2 2 0 1 1 4 0v9.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75zm2-.5a.5.5 0 0 0-.5.5V15h1V6.5a.5.5 0 0 0-.5-.5M18 8.059a2 2 0 0 0-2 2v5.691c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-5.69a2 2 0 0 0-2-2m-.5 2a.5.5 0 0 1 1 0V15h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBarChart4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
