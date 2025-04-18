import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPlanlessIconIcon],svg[logos-planless-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF6254" d="m126.67 171.379l92.426 38.603l-207.46 86.009C3.686 299.23.3 296.893.02 288.682L0 287.526v-59.598c0-3.386 1.923-6.492 4.77-8.047l.882-.418zM256 109.072v78.898l-93.424-36.57c-1.33-.339-1.994-1.694-1.994-2.71c0-.846.462-1.928 1.385-2.46zM0 9.869C0 1.124 3.042-1.735 10.58.997l1.056.407l207.46 86.348l-92.426 38.264L5.652 78.271C2.63 77.039.432 74.129.057 70.557L0 69.467z"></svg:path>`,
})
export class LogosPlanlessIconIcon {
  readonly viewBox = input("0 0 256 298")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
