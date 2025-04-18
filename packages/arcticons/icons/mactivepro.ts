import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMactiveproIcon],svg[arcticons-mactivepro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 11.746l-1.195-1.195c-3.959-3.959-10.377-3.959-14.336 0s-3.959 10.377 0 14.336L24 40.418l8.662-8.661l-3.584-3.584L24 33.25L12.053 21.303a5.069 5.069 0 0 1 7.168-7.168l15.531 15.53l4.779-4.778c3.959-3.959 3.959-10.377 0-14.336s-10.377-3.959-14.336 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.752 22.498l-7.168-7.168l1.194-1.195a5.069 5.069 0 0 1 7.169 7.168z"></svg:path>`,
})
export class ArcticonsMactiveproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
