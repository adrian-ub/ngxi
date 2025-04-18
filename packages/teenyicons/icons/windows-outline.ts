import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsWindowsOutlineIcon],svg[teenyicons-windows-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 3.5l-.105-.489A.5.5 0 0 0 0 3.5zm14-3h.5a.5.5 0 0 0-.605-.489zm0 14l-.07.495A.5.5 0 0 0 15 14.5zm-14-2H0a.5.5 0 0 0 .43.495zm.105-8.511l14-3l-.21-.978l-14 3zM14 .5v14h1V.5zm.57 13.505l-14-2l-.14.99l14 2zM1 12.5v-9H0v9zM.5 8h14V7H.5zM6 2v11h1V2z"></svg:path>`,
})
export class TeenyiconsWindowsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
