import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHospitalIcon],svg[openmoji-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#FFF" d="M22.5 12h27v48h-27zm-9 13h9v35h-9zm36 0h9v35h-9z"></svg:path><svg:path fill="#92D3F5" d="M29.5 44h13v16h-13z"></svg:path><svg:path fill="#EA5A47" d="M43.5 23h-5v-5h-5v5h-5v5h5v5h5v-5h5z"></svg:path><svg:path fill="none" stroke="#92D3F5" d="M17 30h2v5h-2zm0 10h2v5h-2zm0 10h2v5h-2zm36-20h2v5h-2zm0 10h2v5h-2zm0 10h2v5h-2z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M22.5 12h27v48h-27zm-9 13h9v35h-9zm36 0h9v35h-9z"></svg:path><svg:path d="M29.5 44h13v16h-13zM36 60V44m7.5-21h-5v-5h-5v5h-5v5h5v5h5v-5h5zM19 35h-2v-5m2 15h-2v-5m2 15h-2v-5m38-15h-2v-5m2 15h-2v-5m2 15h-2v-5"></svg:path></svg:g>`,
})
export class OpenmojiHospitalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
