import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOwlgramIcon],svg[arcticons-owlgram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.334 35.711l-9.193-4.85m2.077-9.659a6.927 6.927 0 0 0 9.72.211a6.793 6.793 0 0 0-.174-9.612"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.508 19.928a3.174 3.174 0 0 0 4.477.069a3.11 3.11 0 0 0-.05-4.424"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.33 23.069v14.86H11.67v-14.86m9.189 7.793l-9.193 4.849"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.33 23.069c-3.498 3.648-7.13 8.363-12.41 8.363s-8.752-4.715-12.25-8.363"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.557 10.148L24 26.34l16.443-16.192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.235 11.8a6.793 6.793 0 0 0-.173 9.613a6.927 6.927 0 0 0 9.72-.211"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.066 15.573a3.11 3.11 0 0 0-.05 4.424a3.174 3.174 0 0 0 4.476-.07m-1.987 3.142h5.173m6.644 0h5.173"></svg:path>`,
})
export class ArcticonsOwlgramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
