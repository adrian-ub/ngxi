import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiShirtIcon],svg[flat-ui-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2980BA" d="M50 0c27.613 0 50 22.386 50 50s-22.387 50-50 50C22.386 100 0 77.614 0 50S22.386 0 50 0"></svg:path><svg:defs><svg:circle id="flatUiShirt0" cx="50" cy="50" r="50"></svg:circle></svg:defs><svg:clippath id="flatUiShirt1"><svg:use href="#flatUiShirt0"></svg:use></svg:clippath><svg:g clip-path="url(#flatUiShirt1)"><svg:path fill="#2D3E50" d="M-15 17h133v87H-15z"></svg:path><svg:path fill="#EDF0F1" d="M51 17v95h32V17zm-34 95h32V17H17z"></svg:path><svg:path fill="#E64B3C" d="M73 26H27l18.095 21.905L38 55v48h24V55l-7.098-7.098z"></svg:path><svg:path fill="#D5D9D8" d="m26 17l.049 36L50 29l.082-12z"></svg:path><svg:path fill="#D5D9D8" d="m74 17l-.049 36l-23.858-24l-.081-12z"></svg:path><svg:path fill="#C03A2B" d="M73 26H27l11.771 14.251l11.274-11.295l11.203 11.266z"></svg:path><svg:path fill="#fff" d="M69 12v5H31v-5l-5 5v33l24-24l24 24V17z"></svg:path><svg:path fill="#C03A2B" d="m56 49l-1.098-1.098l.744-.902H44.347l.748.905L44 49z"></svg:path><svg:path fill="#DE9273" d="M31-1v19.674h.045c.241 1.587 2.065 3.15 5.517 4.362c7.42 2.606 19.452 2.606 26.872 0c3.45-1.212 5.274-2.775 5.518-4.362H69V-1z"></svg:path><svg:path fill="#BE7C63" d="M69-1s.014 4.435-.018 4.467A17.94 17.94 0 0 1 56 9H44a17.95 17.95 0 0 1-13.022-5.573C31.002 3.452 31-1 31-1z"></svg:path><svg:path fill="#E39D82" d="M50-1v25.991c4.861 0 9.725-.652 13.434-1.955c3.45-1.212 5.274-2.775 5.518-4.362H69V-1z"></svg:path><svg:path fill="#C0866E" d="M56 9c5.102 0 9.708-2.123 12.982-5.533c.01-.009.015-.395.018-.93V-1H50V9z"></svg:path></svg:g>`,
})
export class FlatUiShirtIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
