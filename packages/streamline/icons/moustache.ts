import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoustacheIcon],svg[streamline-moustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8.31a3.5 3.5 0 0 0 6.5-1.81a5.2 5.2 0 0 1-2 .5c-1 0-.58-2.42-2-2.89A2.34 2.34 0 0 0 7 5a2.34 2.34 0 0 0-2.5-.89C3.08 4.58 3.5 7 2.5 7a5.2 5.2 0 0 1-2-.5A3.5 3.5 0 0 0 7 8.31"></svg:path>`,
})
export class StreamlineMoustacheIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
