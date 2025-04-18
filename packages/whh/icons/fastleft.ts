import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFastleftIcon],svg[whh-fastleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M435 467q-19 18-19 44.5t19 45.5l451 448q19 19 46 19t46-19l27-27q19-18 19-44.5t-19-45.5L626 512l379-376q19-19 19-45.5T1005 45l-27-26Q959 0 932 0t-46 19zm154 511q19-18 19-44.5T589 888L210 512l379-376q19-19 19-45.5T589 45l-27-26Q543 0 516.5 0T471 19L19 467Q0 485 0 511.5T19 557l452 448q19 19 45.5 19t45.5-19z"></svg:path>`,
})
export class WhhFastleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
