import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTeslaIcon],svg[game-icons-tesla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 16v210l45 30v60h60V166l-45-30V76l45-30V16zm135 0v30l45 30v60l-45 30v150h60v-60l45-30V16zm-13.688 45.03A45 45 0 0 0 211 106a45 45 0 0 0 90 0a45 45 0 0 0-43.688-44.97M181 346c-30 0-45 15-45 30h240c0-15-15-30-45-30zm-75 60c-15 0-30 15-30 30v60h360v-60c0-15-15-30-30-30z"></svg:path>`,
})
export class GameIconsTeslaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
