import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAndroidIcon],svg[material-symbols-light-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.692 17.02q.206-2.272 1.398-4.173q1.192-1.9 3.176-3.02l-1.562-2.7q-.131-.206-.066-.408q.066-.202.277-.327q.2-.106.393-.04q.192.065.319.256l1.565 2.715q1.82-.764 3.808-.764t3.808.764l1.565-2.715q.127-.19.32-.256q.192-.066.391.04q.212.125.278.327q.065.202-.066.408l-1.561 2.7q1.983 1.12 3.175 3.02q1.192 1.901 1.398 4.172zm5.08-2.328q.445 0 .75-.307q.305-.308.305-.753t-.308-.75t-.752-.305t-.75.308t-.306.752q0 .446.308.75t.753.305m8.462 0q.445 0 .75-.307q.304-.308.304-.753t-.307-.75t-.753-.305t-.75.308t-.305.752t.307.75t.753.305"></svg:path>`,
})
export class MaterialSymbolsLightAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
