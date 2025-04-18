import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPhtmlIcon],svg[catppuccin-phtml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4"><svg:path d="M1 2.7c0-.7.5-1.4 1.2-1.4h11.6c.7 0 1.3.7 1.2 1.4l-1.3 10.4c0 .4-.3.8-.6 1l-4.5 2.4q-.6.45-1.2 0l-4.5-2.4c-.3-.2-.5-.6-.6-1z"></svg:path><svg:path stroke-linecap="round" d="m4 9l.2-1.4m0 0S4.4 6 4.7 6h.6c.3 0 .7.3.7.8c0 .6-.4.8-.7.8zM7.3 9l.4-1.5M8 6l-.3 1.5m0 0s.5-.5.8-.5c.4 0 .8 0 .8.3L9 9m1.6 0l.2-1.4m0 0S11 6 11.3 6h.6c.3 0 .7.3.7.8c0 .6-.4.8-.7.8z"></svg:path></svg:g>`,
})
export class CatppuccinPhtmlIcon {
  readonly viewBox = input("0 0 16 18")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
