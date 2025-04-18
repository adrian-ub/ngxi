import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEmptyIcon],svg[oui-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: ``,
})
export class OuiEmptyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
