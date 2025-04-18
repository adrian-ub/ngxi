import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons156PoaIcon],svg[arcticons-156-poa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.803 13.115l2.966-1.615v11.863M11.803 36.5v-10h3.274c1.85 0 3.351 1.504 3.351 3.358s-1.5 3.359-3.351 3.359h-3.274"></svg:path><svg:circle cx="32.267" cy="19.433" r="3.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 12.947c-.655-.858-1.653-1.447-3.307-1.447h-.276a3.93 3.93 0 0 0-3.93 3.93v4.003"></svg:path><svg:rect width="6.625" height="10" x="20.905" y="26.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.313" ry="3.313"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.1 33.187h-4.431M29.572 36.5l3.313-10l3.312 10M18.093 22.362c.819.687 1.613 1 3.599 1h.341a3.326 3.326 0 0 0 3.326-3.325h0a3.326 3.326 0 0 0-3.326-3.326h-3.94V11.5h7.266M11.803 29.832h3.637m-1.157 1.183v-2.366"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class Arcticons156PoaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
