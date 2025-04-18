import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMVideoIcon],svg[arcticons-m-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.204 26.676c-2.907 6.614 3.865 10.292 8.027 1.565c2.015-4.224 4.022-8.473 5.437-13.589c-1.74 9.87-3.261 18.52.6 18.596c4.857.094 8.519-9.184 11.13-18.622c-2.171 12.223-3.151 18.573 1.058 18.699c2.132.064 4.07-.933 5.355-6.42m6.689 5.032c0 .793-.64 1.435-1.428 1.435s-1.428-.642-1.428-1.435s.639-1.435 1.428-1.435h0c.788 0 1.428.642 1.428 1.435"></svg:path>`,
})
export class ArcticonsMVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
