import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagStHelenaIcon],svg[openmoji-flag-st-helena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M9.887 18H6v2.332L32.113 36H36v-2.332z"></svg:path><svg:path fill="#fff" d="M36 20.332V18h-3.887L6 33.668V36h3.887z"></svg:path><svg:path fill="#fff" d="M6 24h30v6H6z"></svg:path><svg:path fill="#fff" d="M18 18h6v18h-6z"></svg:path><svg:path fill="#d22f27" d="M20 18h2v18h-2z"></svg:path><svg:path fill="#d22f27" d="M6 26h30v2H6zm30 7.668L29.887 30H26l10 6zM36 18h-3.887L24 22.868V24h2zM6 20.332L12.113 24H16L6 18zM6 36h3.887L18 31.132V30h-2z"></svg:path><svg:path fill="#3f3f3f" d="M58.5 29h-.277c.094.03.184.07.277.101Zm-13 0v.101c.093-.032.183-.07.277-.101Z"></svg:path><svg:path fill="#fcea2b" d="M52 28a20 20 0 0 0-6.223 1h12.446A20 20 0 0 0 52 28m6.5 6.5v-5.399c-.093-.032-.183-.07-.277-.101H45.777c-.094.03-.184.07-.277.101V34.5Z"></svg:path><svg:path fill="#92d3f5" d="m44.956 34.81l13.544.053S60 44 52 47"></svg:path><svg:path fill="#92d3f5" d="M44.956 34.81S44 45 52 47"></svg:path><svg:path fill="#1e50a0" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56 42.919c-2.4-1.557-8 0-8 0L52 47Z"></svg:path><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m46 37l3 4v3"></svg:path><svg:ellipse cx="46.858" cy="40.589" fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx=".5" ry="2.647" transform="rotate(-18.17 46.858 40.59)"></svg:ellipse><svg:path fill="#f4aa41" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M53 32h-2l-1-2z"></svg:path><svg:path fill="none" stroke="#f4aa41" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55 41h-3a2.82 2.82 0 0 0 3 0"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M58.583 29v9c0 6.75-6.75 9-6.75 9s-6.75-2.25-6.75-9v-9s6.896-3.406 13.5 0m-.083 5.5h-13"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagStHelenaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
