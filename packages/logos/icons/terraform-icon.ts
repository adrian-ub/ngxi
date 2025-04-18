import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTerraformIconIcon],svg[logos-terraform-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4040B2" d="M176.485 188.994L256 143.127V51.249l-79.515 45.963z"></svg:path><svg:path fill="#5C4EE5" d="m88.243 51.249l79.515 45.963v91.782L88.243 143.08M0 91.83l79.515 45.916v-91.83L0 0m88.243 244.994l79.515 45.915v-91.83l-79.515-45.915"></svg:path>`,
})
export class LogosTerraformIconIcon {
  readonly viewBox = input("0 0 256 291")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
