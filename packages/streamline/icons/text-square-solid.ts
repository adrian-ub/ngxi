import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTextSquareSolidIcon],svg[streamline-text-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0zm5.27 4.04a.242.242 0 0 1 .46 0l1.195 3.585h-2.85L6.77 4.041Zm1.646-.395a1.492 1.492 0 0 0-2.832 0L4.12 8.04l-.01.027l-.828 2.486a.625.625 0 1 0 1.186.396l.69-2.073h3.683l.691 2.073a.625.625 0 1 0 1.186-.396l-.829-2.486l-.009-.027z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTextSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
