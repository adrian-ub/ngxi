import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsH2oIcon],svg[game-icons-h2o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 57c-65.8 0-119 53.2-119 119s53.2 119 119 119s119-53.2 119-119S321.8 57 256 57m-91.5 220.9l-46.9 59.6c5.2 3.1 10 6.9 14.2 11.2l46.9-59.7c-5-3.4-9.8-7.1-14.2-11.1m183 0c-4.4 4-9.2 7.7-14.2 11.2l46.9 59.6c4.2-4.3 9-8.1 14.2-11.2zM80 345c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55m352 0c-30.5 0-55 24.5-55 55s24.5 55 55 55s55-24.5 55-55s-24.5-55-55-55"></svg:path>`,
})
export class GameIconsH2oIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
