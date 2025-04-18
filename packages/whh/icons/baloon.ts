import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBaloonIcon],svg[whh-baloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412 891q76 77 95 133H261q19-56 94-133q-49-13-111.5-67t-116-125.5T37 541T0 384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384q0 71-37 157t-90.5 157.5t-116 125.5T412 891M255 195q-38-11-74 16t-48 76q-14 48-5 168.5T160 576q14 0 23-32.5t18.5-73.5t22.5-54q5-5 20-19.5t23.5-23.5t20-21.5t18.5-24t9-22.5q23-87-60-110"></svg:path>`,
})
export class WhhBaloonIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
