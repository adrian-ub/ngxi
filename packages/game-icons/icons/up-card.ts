import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsUpCardIcon],svg[game-icons-up-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 47L139.4 202.467l93.6-40.115V359h46V162.352l93.6 40.115zM144 256L32 480h448L368 256h-71v121h-82V256z"></svg:path>`,
})
export class GameIconsUpCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
