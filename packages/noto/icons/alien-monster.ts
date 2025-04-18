import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoAlienMonsterIcon],svg[noto-alien-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#995AA8" d="M30.47 104.24h13.39v13.39H30.47zm53.57 0h13.39v13.39H84.04z"></svg:path><svg:path fill="#B574C3" d="M30.48 10.51h13.39V23.9H30.48zm53.56 0h13.39V23.9H84.04z"></svg:path><svg:radialgradient id="notoAlienMonster0" cx="64.344" cy="9.403" r="83.056" gradientUnits="userSpaceOnUse"><svg:stop offset=".508" stop-color="#B574C3"></svg:stop><svg:stop offset=".684" stop-color="#B070BF"></svg:stop><svg:stop offset=".878" stop-color="#A363B2"></svg:stop><svg:stop offset=".981" stop-color="#995AA8"></svg:stop></svg:radialgradient><svg:path fill="url(#notoAlienMonster0)" d="M97.46 64.08V37.3H84.04V23.9H70.65v13.4H57.26V23.9H43.87v13.4H30.48v26.78H17.09v13.39h13.39v13.4h13.39v13.38h13.39V90.87h13.39v13.38h13.39V90.87h13.42v-13.4h13.37V64.08zm-40.21 0H43.86V50.69h13.39zm26.78 0H70.64V50.69h13.39z"></svg:path><svg:radialgradient id="notoAlienMonster1" cx="63.118" cy="24.114" r="65.281" gradientUnits="userSpaceOnUse"><svg:stop offset=".508" stop-color="#B574C3"></svg:stop><svg:stop offset=".684" stop-color="#B070BF"></svg:stop><svg:stop offset=".878" stop-color="#A363B2"></svg:stop><svg:stop offset=".981" stop-color="#995AA8"></svg:stop></svg:radialgradient><svg:path fill="url(#notoAlienMonster1)" d="M110.82 37.29h13.4v26.8h-13.4z"></svg:path><svg:radialgradient id="notoAlienMonster2" cx="62.811" cy="13.081" r="75.09" gradientUnits="userSpaceOnUse"><svg:stop offset=".508" stop-color="#B574C3"></svg:stop><svg:stop offset=".684" stop-color="#B070BF"></svg:stop><svg:stop offset=".878" stop-color="#A363B2"></svg:stop><svg:stop offset=".981" stop-color="#995AA8"></svg:stop></svg:radialgradient><svg:path fill="url(#notoAlienMonster2)" d="M3.7 37.28h13.4v26.8H3.7z"></svg:path>`,
})
export class NotoAlienMonsterIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
