import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosIftttIcon],svg[logos-ifttt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 0h43.18v135.71H0zm246.747 0h-74.024v43.18h30.843v92.53h43.181V43.18h30.843V0zm117.205 0h-74.024v43.18h30.843v92.53h43.18V43.18h30.844V0zm117.205 0h-74.024v43.18h30.843v92.53h43.18V43.18H512V0zM160.386 43.18V0h-98.7v135.71h43.181V98.7h37.013V55.52h-37.013V43.18z"></svg:path>`,
})
export class LogosIftttIcon {
  readonly viewBox = input("0 0 512 136")
  readonly width = input("3.77em")
  readonly height = input("1em")
}
