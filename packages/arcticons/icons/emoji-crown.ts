import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCrownIcon],svg[arcticons-emoji-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.234 10.173c1.597 0 2.891 1.293 2.891 2.887s-1.294 2.887-2.89 2.887"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.74 23.418a9.5 9.5 0 0 1-7.54-3.712a9.45 9.45 0 0 1-1.965-5.783m33.512 0c0 5.244-4.256 9.495-9.506 9.495"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.766 15.947a2.888 2.888 0 1 1-.001-5.774m-33.531 0c1.597 0 2.891 1.293 2.891 2.887s-1.294 2.887-2.89 2.887"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.766 15.947a2.888 2.888 0 1 1-.001-5.774"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.189 15.875c-.34 4.307-1.963 7.543-6.543 7.543h.094a9.5 9.5 0 0 1-7.54-3.712a9.45 9.45 0 0 1-1.966-5.783v-3.75v23.458h33.532V10.173"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.747 13.923c0 5.244-4.256 9.495-9.506 9.495h-.166c-4.57 0-6.197-3.222-6.541-7.516"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.234 10.173V33.63h33.532V10.173"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.107 13.065c0 1.594 1.294 2.887 2.89 2.887s2.891-1.293 2.891-2.887h0c0-1.595-1.294-2.887-2.89-2.887s-2.89 1.292-2.89 2.887"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.107 13.065c0 1.594 1.294 2.887 2.89 2.887s2.891-1.293 2.891-2.887h0c0-1.595-1.294-2.887-2.89-2.887s-2.89 1.292-2.89 2.887M5.5 33.63h37v4.197h-37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 33.63h37v4.197h-37z"></svg:path>`,
})
export class ArcticonsEmojiCrownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
