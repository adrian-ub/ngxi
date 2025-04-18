import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSaveArrowIcon],svg[game-icons-save-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 30v256h-64l96 128l96-128h-64V30zM32 434v48h448v-48z"></svg:path>`,
})
export class GameIconsSaveArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
