import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoAppflowIcon],svg[ion-logo-appflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.626 28.424L8 484.424h114.376L256 164.779l133.624 319.645H504l-190.626-456z"></svg:path><svg:path fill="currentColor" d="M312 346.039c0 30.928-25.072 56-56 56s-56-25.072-56-56s25.072-56 56-56s56 25.072 56 56"></svg:path>`,
})
export class IonLogoAppflowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
