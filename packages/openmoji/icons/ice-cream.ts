import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiIceCreamIcon],svg[openmoji-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.999" cy="21.001" r="10" fill="#FCEA2B" transform="rotate(-45.001 36 21.002)"></svg:circle><svg:path fill="#F1B31C" d="M43.07 13.938c-2.593-2.594-6.257-3.456-9.571-2.602a9.94 9.94 0 0 1 4.571 2.602c3.907 3.906 3.907 10.237.001 14.142a9.93 9.93 0 0 1-4.571 2.602c3.314.853 6.977-.008 9.571-2.602c3.906-3.905 3.906-10.236 0-14.142"></svg:path><svg:path fill="#FCEA2B" d="M52.07 23.93c3.907 3.904 3.907 10.236.001 14.142C48.166 41.977 39.905 44.904 36 41c-3.905-3.906-1.977-13.166 1.929-17.071s10.237-3.906 14.141 0"></svg:path><svg:path fill="#F1B31C" d="M52.07 23.938c-2.593-2.594-6.257-3.456-9.571-2.602a9.94 9.94 0 0 1 4.571 2.602c3.907 3.906 3.907 10.238.001 14.142a9.93 9.93 0 0 1-4.571 2.602c3.314.853 6.977-.008 9.571-2.602c3.906-3.904 3.906-10.236 0-14.142"></svg:path><svg:ellipse cx="26.999" cy="31.002" fill="#FCEA2B" rx="10" ry="10.001" transform="rotate(-45.001 26.999 31.003)"></svg:ellipse><svg:path fill="#F1B31C" d="M34.07 23.938c-2.593-2.594-6.257-3.456-9.571-2.602a9.94 9.94 0 0 1 4.571 2.602c3.907 3.906 3.907 10.238.001 14.142a9.93 9.93 0 0 1-4.571 2.602c3.314.853 6.977-.008 9.571-2.602c3.906-3.904 3.906-10.236 0-14.142"></svg:path><svg:path fill="#FFF" d="M33 60v-6a5 5 0 0 0-5-5h-7a5 5 0 0 1-5-5v-3a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5h-7a5 5 0 0 0-5 5v6"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="2" d="M26 21c0-5.523 4.477-10 10-10s10 4.477 10 10"></svg:path><svg:path stroke-width="2" d="M36.066 26.503A10 10 0 0 1 45 21c5.523 0 10 4.477 10 10a9.98 9.98 0 0 1-3.795 7.842"></svg:path><svg:path stroke-width="2" d="M20.64 38.717A9.98 9.98 0 0 1 17 31c0-5.523 4.477-10 10-10s10 4.477 10 10a9.98 9.98 0 0 1-3.794 7.842"></svg:path><svg:path stroke-width="1.947" d="M33 60v-6a5 5 0 0 0-5-5h-7a5 5 0 0 1-5-5v-3a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5h-7a5 5 0 0 0-5 5v6m-10 0h14"></svg:path></svg:g>`,
})
export class OpenmojiIceCreamIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
