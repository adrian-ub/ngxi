import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBaselineIcon],svg[logos-baseline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99DBB1" d="m182.918 35.045l38.037 38.036l-37.61 37.611l-23.505-23.506l-17.523 17.521l23.506 23.506l17.522 17.523L256 73.081L238.477 55.56l-38.036-38.037z"></svg:path><svg:path fill="#99DBB3" d="m72.655 0l-55.56 55.559l17.523 17.523l38.037-38.037l23.506 23.506l17.522-17.522l-23.506-23.506z"></svg:path><svg:path fill="#008F32" d="M73.082 110.691L17.523 55.132L0 72.654l73.082 73.082l17.095-17.095l.428-.427L200.868 17.95L183.346.427z"></svg:path>`,
})
export class LogosBaselineIcon {
  readonly viewBox = input("0 0 256 146")
  readonly width = input("1.76em")
  readonly height = input("1em")
}
