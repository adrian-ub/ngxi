import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalWeblateIcon],svg[devicon-original-weblate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(50 76)"><svg:lineargradient id="deviconOriginalWeblate0" x1="-100.86" x2="-37.246" y1="63.797" y2="63.797" gradientTransform="matrix(.9831 0 0 -1.0172 49.154 52.895)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#00d2e6"></svg:stop><svg:stop offset="1" stop-color="#2eccaa"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconOriginalWeblate0)" d="M32 12.5c-1.9 0-3.7-.4-5.5-1.2c-4-1.7-7.4-5-10.3-9.4c.8-1.4 1.5-2.9 2.2-4.4c2.8-6.6 4.2-13.9 4.3-21.1v-.8c0-2.8-.4-5.7-1.4-8.3c-1.1-3.1-2.9-6.1-5.7-7.3c-.5-.2-1.1-.3-1.6-.3c-3.6-6.7-3.7-13 0-19.1h.2c4.3 0 8.6 1.4 12.3 3.7c10 6.4 15 18.7 15.1 30.9v.4h.1c-.1 12.9-3.2 26-9.7 36.9zM9.8 32.7c-9.3 3.8-20.2 3.6-29.4-.7c-10.6-4.9-18.8-14.6-23.8-25.5c-8.6-18.8-8.8-41.2-.6-60.2c6.1 2.4 11.5-1.4 11.5-1.4s0 6 5.8 9c-5.9 13.9-5.8 30.5.2 44.1c2.9 6.5 7.3 12.6 13.3 16.1c2.2 1.2 4.6 2 7 2.3c4.3 6.6 9.8 12.3 16 16.3z"></svg:path><svg:lineargradient id="deviconOriginalWeblate1" x1="-59.46" x2="-26.638" y1="27.873" y2="43.338" gradientTransform="matrix(1.1631 0 0 -.8598 58.153 44.71)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-opacity="0"></svg:stop><svg:stop offset=".514"></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconOriginalWeblate1)" fill-rule="evenodd" d="M32 12.5c-1.9 0-3.7-.4-5.5-1.2c-4-1.7-7.4-5-10.3-9.4c.8-1.4 1.5-2.9 2.2-4.4c.9-2 1.6-4 2.2-6.1C22-13.4 40.2-7.3 37.5.7C36 4.8 34.2 8.8 32 12.5zM9.8 32.7c-9.3 3.8-20.2 3.6-29.4-.7c-10.6-4.9.3-21.5 6.4-18.1c2.2 1.2 4.5 2 7 2.3c4.3 6.8 9.8 12.5 16 16.5z" clip-rule="evenodd" opacity=".3"></svg:path><svg:lineargradient id="deviconOriginalWeblate2" x1="29.342" x2="-34.164" y1="63.797" y2="63.797" gradientTransform="matrix(.9831 0 0 -1.0172 49.154 52.895)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#1fa385"></svg:stop><svg:stop offset="1" stop-color="#2eccaa"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconOriginalWeblate2)" d="M-13.6-24.3v-.4c.1-12.2 5.1-24.6 15.1-30.9c3.7-2.3 8-3.7 12.3-3.7h.2v19.1c-.5 0-1.1.1-1.6.3c-2.8 1.2-4.6 4.3-5.7 7.3c-1 2.7-1.4 5.5-1.4 8.3v.8c.1 7.2 1.4 14.4 4.3 21C12.7 5 17.8 11.8 25 14.9c5.4 2.4 11.4 1.8 16.3-1c6.1-3.4 10.5-9.5 13.3-16.1c6-13.6 6.1-30.1.2-44.1c5.8-3 5.8-9 5.8-9s5.4 3.9 11.5 1.4c8.1 19 7.9 41.5-.6 60.2c-5 11-13.1 20.6-23.8 25.5c-9.5 4.4-20.6 4.5-30.1.4C9 28.7 2 22-3 14.2c-7.2-11.3-10.6-25-10.6-38.5z"></svg:path></svg:g>`,
})
export class DeviconOriginalWeblateIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
