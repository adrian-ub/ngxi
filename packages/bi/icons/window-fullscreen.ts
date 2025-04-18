import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biWindowFullscreenIcon],svg[bi-window-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"></svg:path></svg:g>`,
})
export class BiWindowFullscreenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
