import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeyIcon],svg[openmoji-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4AA41" d="M33.536 31.991c-1.402-4.288-.225-9.41 3.428-13.063c5.018-5.018 12.808-5.364 17.4-.773s4.244 12.381-.774 17.4c-4.057 4.056-10.434 5.512-14.268 2.588"></svg:path><svg:path fill="#F4AA41" stroke="#F4AA41" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m33.652 31.736l-2.434 2.451l-16.574 16.327v7.146h6.399v-4.576h5.011v-5.782h5.986l2.351-2.373v-4.302h1.971l3.09-3.09"></svg:path><svg:path fill="#E27022" d="m15.985 53.346l.001-1.907l15.912-15.565l.952.974z"></svg:path><svg:circle cx="48.52" cy="23.998" r="3.952" fill="#E27022"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M30.735 34.656L14.303 50.681v7.24h7.565v-4.636h5.125v-5.858h5.098l2.405-2.404v-4.358h2.015"></svg:path><svg:circle cx="48.52" cy="23.998" r="3.952"></svg:circle><svg:path d="M34.226 31.178c-1.43-4.238-.347-9.22 3.18-12.695c4.845-4.771 12.465-4.889 17.022-.263s4.322 12.244-.523 17.016c-3.917 3.857-9.648 4.673-14.108 2.4"></svg:path></svg:g>`,
})
export class OpenmojiKeyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
