import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsMoebiusTriangleIcon],svg[game-icons-moebius-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.094 19.53L150.53 35.22l234.19 234.186l11.436 11.47l-15.625 4.187l-182.25 48.78L184 387.032l307.78-82.467l.408-1.5zm-77.75 22.94L25.78 436.31l45.376 45.375l87.375-326.062l4.19-15.656l11.436 11.468l133.688 133.718l52.22-13.97L131.343 42.47zm41.062 133.655L87.53 492.845l381.126-102.126l17.53-65.314L173.22 409.28l-15.657 4.19l4.218-15.658l49.126-183.156l-38.5-38.53z"></svg:path>`,
})
export class GameIconsMoebiusTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
