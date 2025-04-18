import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTurretIcon],svg[logos-turret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#195DE6" d="m208 288l-16-128h32l16-16V0h-48v48h-32V0H96v48H64V0H16v144l16 16h32L48 288H16L0 304v80h256v-80l-16-16z"></svg:path>`,
})
export class LogosTurretIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
