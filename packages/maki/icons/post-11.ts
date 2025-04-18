import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPost11Icon],svg[maki-post-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 5.5V9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.5a.5.5 0 0 1 .5-.5a.49.49 0 0 1 .21 0L5.5 7l3.8-2a.488.488 0 0 1 .2 0a.5.5 0 0 1 .5.5zM1.25 2.92l.08.08L5.5 5l4.19-2h.06a.49.49 0 0 0 .25-.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5a.49.49 0 0 0 .25.42z" fill="currentColor"></svg:path>`,
})
export class MakiPost11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
