import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBeach48Icon],svg[fluent-color-beach-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBeach480)" d="M32.504 16.444L30.4 15.167l-8.55 14.092l2.103 1.277z"></svg:path><svg:path fill="url(#fluentColorBeach481)" d="M11.808 39.76L18.485 43l5.09-3.24l7.335 2.672l3.813-3.482L37 40.522l1-.554c-.074-4.16-2.61-8.19-7.09-10.387c-6.72-3.306-15.286-1.258-19.102 4.564c-1.33 2.026-1.896 4.223-1.797 6.377z"></svg:path><svg:path fill="url(#fluentColorBeach482)" d="M35.83 35.728c-.667 0-1.23.45-1.433 1.096c-.767 2.468-2.643 3.662-4.497 3.684c-1.856.021-3.728-1.13-4.492-3.45c-.205-.62-.768-1.067-1.433-1.067c-.67 0-1.205.453-1.408 1.066v.002c-.752 2.32-2.618 3.477-4.474 3.465c-1.855-.012-3.736-1.194-4.515-3.648c-.205-.651-.798-1.098-1.49-1.069c-.685.003-1.235.554-1.405 1.185L10.68 37c-.41 1.789-1.175 2.727-2.03 3.265l-.003.001c-.89.57-2.08.803-3.404.83c-.85 0-1.493.734-1.493 1.565c0 .836.672 1.566 1.495 1.566c1.621 0 3.417-.294 4.966-1.276a7 7 0 0 0 2.105-2.092c3.077 3.758 8.706 3.73 11.684-.096c3.037 3.88 8.82 3.8 11.83-.175c1.68 2.235 4.31 3.534 6.925 3.534c.851 0 1.495-.734 1.495-1.566c0-.836-.672-1.566-1.495-1.566c-2.356 0-4.7-1.613-5.49-4.166v-.001c-.204-.647-.767-1.096-1.434-1.096"></svg:path><svg:path fill="url(#fluentColorBeach483)" d="M39.43 26.105a1.75 1.75 0 0 0 2.315-.449l.505-.678c3.5-6.5 1.858-14.753-4.75-18.8s-15.276-2.314-19.295 4.268l-.285.463a1.75 1.75 0 0 0 .577 2.412z"></svg:path><svg:path fill="url(#fluentColorBeach484)" d="M37.417 6.226c-3.112.905-9.201 4.916-12.711 10.99l8.772 5.346c3.789-5.904 4.562-13.155 3.94-16.336"></svg:path><svg:defs><svg:lineargradient id="fluentColorBeach480" x1="24.002" x2="35.289" y1="26.754" y2="15.653" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CD3E1D"></svg:stop><svg:stop offset="1" stop-color="#592A00"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach481" x1="24" x2="24" y1="38.799" y2="28" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FFA43D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach482" x1="24.025" x2="24.025" y1="42.647" y2="35.992" gradientUnits="userSpaceOnUse"><svg:stop offset=".061" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach483" x1="40.848" x2="21.748" y1="30.793" y2="3.548" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA1D2D"></svg:stop><svg:stop offset="1" stop-color="#FB6F7B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach484" x1="36.829" x2="25.891" y1="16.215" y2="12.177" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FECBE6"></svg:stop><svg:stop offset="1" stop-color="#FDAFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBeach48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
