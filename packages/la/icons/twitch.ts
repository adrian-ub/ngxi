import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTwitchIcon],svg[la-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5L5 9v16h5.5v3h3l3-3H21l6-6V5zM9 7h16v11l-3 3h-6l-3 3v-3H9zm5 4v6h2v-6zm5 0v6h2v-6z"></svg:path>`,
})
export class LaTwitchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
