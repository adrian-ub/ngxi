import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChargePlugIcon],svg[openmoji-charge-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m24.99 44.8l.087 14.452l8.436-.08s6.446-.238 8.674-7.162s-.478-7.64-.478-7.64s-13.703-.73-16.719.43m28.678-27.589V12.51a.617.617 0 0 0-.653-.653h-34.81a.617.617 0 0 0-.654.653v16.327a.617.617 0 0 0 .654.653h34.81a.617.617 0 0 0 .653-.653v-4.375H57v-7.25z"></svg:path><svg:path fill="#9b9b9a" d="M43.285 52.73L47 52v-7l-3.715-1.142z"></svg:path><svg:path fill="#fcea2b" d="M24.926 51.188a.607.607 0 0 1-.643.642h-7.58a1.479 1.479 0 0 0 0 2.958h7.58a.607.607 0 0 1 .643.643m0-14.851a.607.607 0 0 1-.643.642h-7.58a1.479 1.479 0 0 0 0 2.958h7.58a.607.607 0 0 1 .643.642"></svg:path><svg:path fill="#9b9b9a" d="M24.99 44.8c6-.332 12.013-.31 18.01.065c-2-4.865-5-7.693-11.323-7.693H24.99z"></svg:path><svg:path fill="#d0cfce" d="M56.572 45.594a.607.607 0 0 1-.643.643h-8.565v3.922h8.565a.607.607 0 0 1 .643.643z"></svg:path><svg:path fill="#b1cc33" d="M21.767 25.927h4.931V15.484h-4.93z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-miterlimit="10" d="M24.283 51.188h-7.58a2.14 2.14 0 0 0-2.122 2.121h0a2.14 2.14 0 0 0 2.122 2.122h7.58m0-14.851h-7.58a2.14 2.14 0 0 0-2.122 2.12h0a2.14 2.14 0 0 0 2.122 2.122h7.58"></svg:path><svg:path stroke-linejoin="round" d="M24.347 59.932h7.394c6.463-.02 11.686-5.273 11.668-11.736c-.02-6.436-5.232-11.649-11.668-11.667h-7.394z"></svg:path><svg:path stroke-linejoin="round" d="m42.735 52.473l3.986-1.093v-6.365l-3.986-1.028m13.194 6.815h-9.208v-5.208h9.208m-2.261-28.383V12.51a.617.617 0 0 0-.653-.653h-34.81a.617.617 0 0 0-.654.653v16.327a.617.617 0 0 0 .654.653h34.81a.617.617 0 0 0 .653-.653v-4.375H57v-7.25z"></svg:path><svg:path stroke-linejoin="round" d="M21.441 15.157h5.584v11.096h-5.584z"></svg:path></svg:g>`,
})
export class OpenmojiChargePlugIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
