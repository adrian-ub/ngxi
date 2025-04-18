import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPlayFilledIcon],svg[oui-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m12.345 6.801l-7.2-4.581C4.21 1.625 3 2.308 3 3.419v9.162c0 1.111 1.21 1.794 2.146 1.199l7.2-4.581a1.425 1.425 0 0 0 0-2.398z"></svg:path>`,
})
export class OuiPlayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
