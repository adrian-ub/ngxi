import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScribbleLightIcon],svg[ph-scribble-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.25 188.24a16.63 16.63 0 0 0 0 23.52a6 6 0 1 1-8.48 8.48a28.61 28.61 0 0 1 0-40.48l9.37-9.38a16.63 16.63 0 0 0-23.52-23.51l-66.75 66.75a28.63 28.63 0 0 1-40.49-40.49l98.76-98.75a16.63 16.63 0 0 0-23.52-23.51l-66.76 66.75a28.63 28.63 0 0 1-40.49-40.49l41.38-41.37a6 6 0 1 1 8.49 8.48L50.86 85.62a16.63 16.63 0 0 0 23.52 23.51l66.75-66.75a28.63 28.63 0 0 1 40.49 40.49l-98.76 98.75a16.63 16.63 0 0 0 23.52 23.51l66.76-66.75a28.63 28.63 0 0 1 40.49 40.49Z"></svg:path>`,
})
export class PhScribbleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
