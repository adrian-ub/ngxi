import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatValignCenterIcon],svg[zmdi-format-valign-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 389l86-85l85 85h-64v86h-43v-86zM256 91l-85 85l-86-85h64V5h43v86zM0 219h341v42H0z"></svg:path>`,
})
export class ZmdiFormatValignCenterIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
