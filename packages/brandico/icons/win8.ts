import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[brandicoWin8Icon],svg[brandico-win8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m985.875 0l-548.75 80.031v397.688h548.75zM398.469 85.688L0 143.813v333.906h398.469zM0 516.376v338.156l398.469 58.813V516.376zm437.125 0v402.688l548.75 80.938V516.377z"></svg:path>`,
})
export class BrandicoWin8Icon {
  readonly viewBox = input("0 0 986 1000")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
