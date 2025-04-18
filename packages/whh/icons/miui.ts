import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMiuiIcon],svg[whh-miui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 640V0h192v640zM512 256q0-27-18.5-45.5T448 192H192v448H0V0h512q80 0 136 56t56 136v448H512zm-64 384H256V256h192z"></svg:path>`,
})
export class WhhMiuiIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
