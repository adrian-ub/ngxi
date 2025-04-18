import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBurgerIcon],svg[ps-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 237v-51q21-11 21-37q0-62-43.5-105.5T304 0H176Q114 0 70.5 43.5T27 149q0 26 21 37v49q-18 3-30.5 17.5T5 286q0 20 14 35t33 18q-4 18-4 24q0 9 4 25q-25 12-25 39v21q0 27 18 45.5T91 512h298q28 0 46-18.5t18-45.5v-21q0-27-25-39q4-16 4-25q0-8-4-22q19-3 33-18t14-35q0-19-12.5-33.5T432 237M91 192h128v43H91zm170 0h128v43H261zM176 43h128q45 0 76 31t31 75H69q0-44 31-75t76-31m213 320q0 21-21 21H112q-21 0-21-21q0-22 21-22h256q21 0 21 22m22 85q0 21-22 21H91q-22 0-22-21v-21h342zm10-149H59q-11 0-11-11t11-11h362q11 0 11 11t-11 11M155 64h21v21h-21zm64 0h21v21h-21zm64 0h21v21h-21z"></svg:path>`,
})
export class PsBurgerIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
