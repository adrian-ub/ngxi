import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLooksIcon],svg[zmdi-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.5 149q61.5 0 105.5 44t44 106h-43q0-44-31-75.5T235 192t-75.5 31.5T128 299H85q0-62 44-106t105.5-44m.5-85q97 0 165.5 69T469 299h-42q0-80-56.5-136t-136-56T99 163T43 299H0q0-97 69-166t166-69"></svg:path>`,
})
export class ZmdiLooksIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
