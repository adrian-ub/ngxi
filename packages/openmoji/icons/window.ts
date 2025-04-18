import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWindowIcon],svg[openmoji-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.025" d="M35.9 14.713v42.455m-21.179-21.21h42.562"></svg:path><svg:rect width="42.775" height="42.775" x="14.513" y="14.613" fill="#92d3f5" rx=".784"></svg:rect><svg:path fill="#fff" d="m14.535 26.666l12.053-12.053H55.23L14.514 55.477z"></svg:path><svg:path fill="#a57939" d="M60.94 62H11.018a1.06 1.06 0 0 1-1.06-1.06V11.018a1.06 1.06 0 0 1 1.06-1.06H60.94a1.06 1.06 0 0 1 1.06 1.06V60.94A1.06 1.06 0 0 1 60.94 62m-44.367-5.612h38.655a1.06 1.06 0 0 0 1.06-1.06V16.672a1.06 1.06 0 0 0-1.06-1.06H16.573a1.06 1.06 0 0 0-1.06 1.06v38.656a1.06 1.06 0 0 0 1.06 1.06"></svg:path><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.025" d="M35.9 14.613v42.774M14.513 35.958h42.775"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61 61H10.958m0-3.832v-46.21H61v46.21"></svg:path>`,
})
export class OpenmojiWindowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
