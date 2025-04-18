import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDeveloperBoardIcon],svg[zmdi-developer-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 128h-43v43h43v42h-43v43h43v43h-43v42q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43v42h43zm-86 213V43H43v298zM85 213h107v86H85zm128-42h86v64h-86zM85 85h107v107H85zm128 192h86v128h-86z"></svg:path>`,
})
export class ZmdiDeveloperBoardIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
