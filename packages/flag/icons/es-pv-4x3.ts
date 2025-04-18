import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEsPv4x3Icon],svg[flag-es-pv-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D52B1E" d="M0 0h640v480H0z"></svg:path><svg:path fill="#009B48" d="M0 0h53.1l133.4 100.1l133.5 100L586.9 0H640v39.9l-133.4 100L373.2 240L640 440.2V480h-53.1L453.5 380L320 279.9L53.1 480H0v-39.8l133.4-100.1L266.8 240L0 39.9v-20z"></svg:path><svg:path fill="#FFF" d="M288.1 0h63.8v208.1H640v63.8H351.9V480h-63.8V271.9H0v-63.8h288.1v-104z"></svg:path>`,
})
export class FlagEsPv4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
