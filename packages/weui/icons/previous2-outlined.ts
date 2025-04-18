import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPrevious2OutlinedIcon],svg[weui-previous2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.269 11.2l1.408 1.408l-.849.849l-1.98-1.98l-.494-.495a.5.5 0 0 1 0-.707L9.828 7.8l.849.849L9.325 10H14a3 3 0 0 1 0 6h-2v-1.2h2a1.8 1.8 0 0 0 0-3.6zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"></svg:path>`,
})
export class WeuiPrevious2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
