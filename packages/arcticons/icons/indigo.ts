import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndigoIcon],svg[arcticons-indigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="20.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="23.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="26.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="29.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.585" cy="20.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.225" cy="28.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.225" cy="28.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.225" cy="28.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.225" cy="31.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.225" cy="34.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.22" cy="26.78" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.356" cy="24.647" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.455" cy="22.548" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.661" cy="15.34" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.775" cy="13.225" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIndigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
