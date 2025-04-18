import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAsteriskIcon],svg[el-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M489.838 29.354v443.603L68.032 335.894L0 545.285l421.829 137.086l-260.743 358.876l178.219 129.398L600.048 811.84l260.673 358.806l178.146-129.398l-260.766-358.783L1200 545.379l-68.032-209.403l-421.899 137.07V29.443H489.84z"></svg:path>`,
})
export class ElAsteriskIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
