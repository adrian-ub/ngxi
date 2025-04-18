import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinemaProIcon],svg[arcticons-cinema-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.004 31.569H4.5V18.828h21.277v13.994h-5.514l-1.755-3.04H8.972zm15.773-11.345h3.28l1.849-3.203m.64-4.315l-.666-.666h-4.992m-4.528 1.639v1.682h-5.536v3.467"></svg:path><svg:circle cx="32.238" cy="15.014" r="2.409" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.004 31.569l1.417 2.454h6.051l1.469 2.543h10.518v-3.744h-3.682v-1.253"></svg:path><svg:circle cx="34.972" cy="30.758" r="4.386" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.777 22.455h4.357l.997-.997h3.698v-.488h8.63v10.77h-4.212m-8.653-1.253h-4.817M43.5 33.321V19.398m-17.612-7.964H10.103v3.051h2.06l.466-.806h13.259Z"></svg:path><svg:circle cx="34.972" cy="30.758" r="2.326" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.472 20.97v15.358"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m29.459 34.694l3.583.003m3.847.006l5.603-.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.112 22.496h7.333v4.532h-7.333z"></svg:path>`,
})
export class ArcticonsCinemaProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
