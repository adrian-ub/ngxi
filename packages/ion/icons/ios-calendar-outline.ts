import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosCalendarOutlineIcon],svg[ion-ios-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M80 112v64h352v-64"></svg:path><svg:path d="M352 96V64h-16v32H176V64h-16v32H64v352h384V96h-96zm80 336H80V192h352v240zm0-256H80v-64h80v32h16v-32h160v32h16v-32h80v64z" fill="currentColor"></svg:path>`,
})
export class IonIosCalendarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
