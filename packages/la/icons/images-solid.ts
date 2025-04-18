import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laImagesSolidIcon],svg[la-images-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v18h4v4h24V9h-4V5zm2 2h20v14H4zm2 2v10h16V9zm2 2h12v6H8zm18 0h2v14H8v-2h18z"></svg:path>`,
})
export class LaImagesSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
