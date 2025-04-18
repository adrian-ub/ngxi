import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsWaterTowerIcon],svg[game-icons-water-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 25.49L119.5 71h273zM105 89v30h78V89zm96 0v30h110V89zm128 0v30h78V89zM89 137v30h334v-30zm16 48v46h78v-46zm96 0v46h110v-46zm128 0v46h78v-46zm-224 64v14h78v-14zm96 0v14h110v-14zm128 0v14h78v-14zM32 283v18h448v-18zm71 37v176h18v-25.8l135-52.5l135 52.5V496h18V320h-18v25.8l-135 52.5l-135-52.5V320zm18 45.2L231.1 408L121 450.8zm270 0v85.6L280.9 408z"></svg:path>`,
})
export class GameIconsWaterTowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
