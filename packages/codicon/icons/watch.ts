import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconWatchIcon],svg[codicon-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.5 9h2V8H8V5.5H7v3z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 3.669A5 5 0 0 0 3 8a5 5 0 0 0 2.5 4.331V14.5l.5.5h4l.5-.5v-2.169A5 5 0 0 0 13 8a5 5 0 0 0-2.5-4.331V1.5L10 1H6l-.5.5zM12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconWatchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
