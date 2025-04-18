import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMcdeliveryIcon],svg[arcticons-mcdelivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 32.272c0-5.785-1.511-23.402-6.306-23.402S24 22.16 24 30.448C24 22.16 22.602 8.87 17.807 8.87S11.5 26.486 11.5 32.272"></svg:path><svg:ellipse cx="13.229" cy="36.752" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.629" ry="1.594"></svg:ellipse><svg:ellipse cx="34.764" cy="36.752" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.629" ry="1.594"></svg:ellipse><svg:circle cx="30.799" cy="38.147" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.022" cy="38.574" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.246" cy="38.726" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.615" cy="38.726" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.763" cy="38.574" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.207" cy="38.105" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMcdeliveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
