import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoChevronSmallLeftIcon],svg[entypo-chevron-small-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.141 13.418a.695.695 0 0 1 0 .978a.68.68 0 0 1-.969 0l-3.83-3.908a.697.697 0 0 1 0-.979l3.83-3.908a.68.68 0 0 1 .969 0a.695.695 0 0 1 0 .978L9 10z"></svg:path>`,
})
export class EntypoChevronSmallLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
