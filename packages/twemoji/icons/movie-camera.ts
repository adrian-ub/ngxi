import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMovieCameraIcon],svg[twemoji-movie-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268a6 6 0 0 0-1.776-11.733a5.97 5.97 0 0 0-4.131 1.656A7 7 0 0 0 10 11a6.99 6.99 0 0 0 3.409 6H13a4 4 0 0 0-4 4H8l-6-4H1v14h1l6-4h1v2a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4v-3h2v1h3v-6z"></svg:path><svg:path fill="#66757F" d="M22 11a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 11"></svg:path><svg:circle cx="17" cy="11" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="27.999" cy="14" r="4" fill="#66757F"></svg:circle><svg:circle cx="27.999" cy="14" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#8899A6" d="M17 20h10v10H17z"></svg:path><svg:path fill="#31373D" d="M19 22h6v6h-6z"></svg:path><svg:circle cx="12.999" cy="28" r="2" fill="#8899A6"></svg:circle>`,
})
export class TwemojiMovieCameraIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
