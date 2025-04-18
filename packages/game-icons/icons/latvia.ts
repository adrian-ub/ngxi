import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLatviaIcon],svg[game-icons-latvia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.446 354.575c-8.66-40.146-4.72-98.13 46.128-175.924l53.147-21.388l60.923 88.145l57.035-23.333l-3.889-79.72l62.267-28.864l71.247 65.16l29.177-13.022l63.856 34.828l28.815 122.077c-18.165 31.708-30.85 65.514-104.492 75.975l-113.926-84.4c-97.46 20.25-135.145 4.186-184.716-5.185z"></svg:path>`,
})
export class GameIconsLatviaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
