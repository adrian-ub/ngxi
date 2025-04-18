import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCube32FilledIcon],svg[fluent-cube-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.846 2.757a6 6 0 0 1 4.308 0l9.923 3.817A3 3 0 0 1 30 9.374v13.253a3 3 0 0 1-1.923 2.8l-9.923 3.816a6 6 0 0 1-4.308 0l-9.923-3.816A3 3 0 0 1 2 22.627V9.374a3 3 0 0 1 1.923-2.8zm-4.452 7.324a1 1 0 0 0-.788 1.838L15 14.66V21a1 1 0 0 0 2 0v-6.34l6.394-2.74a1 1 0 1 0-.788-1.839L16 12.912z"></svg:path>`,
})
export class FluentCube32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
