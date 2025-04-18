import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRemoteIcon],svg[codicon-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.904 9.57L8.928 5.596l3.976-3.976l-.619-.62L8 5.286v.619l4.285 4.285l.62-.618zM3 5.62l4.072 4.07L3 13.763l.619.618L8 10v-.619L3.619 5L3 5.619z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconRemoteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
