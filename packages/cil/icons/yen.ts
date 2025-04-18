import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilYenIcon],svg[cil-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m396.641 97.81l-25.282-19.62l-114.946 148.122L148.938 78.587l-25.876 18.826L238.438 256h-85.967v32H240v34.823h-87.529v32H240V432h32v-77.177h87.529v-32H272V288h87.529v-32h-85.65z"></svg:path>`,
})
export class CilYenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
