import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFingerprint3Icon],svg[tdesign-fingerprint-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11C2 5.477 6.477 1 12 1c1.484 0 2.894.324 4.163.905l.909.417l-.833 1.818l-.91-.417A8 8 0 0 0 4 11v3H2.001zm16.957-7.253l.649.76A9.96 9.96 0 0 1 22 11v3c0 2.64-.57 5.15-1.592 7.412l-.413.911l-1.822-.824l.412-.911A15.9 15.9 0 0 0 20 14v-3a7.96 7.96 0 0 0-1.915-5.193l-.65-.76zM11 5.5h1a5.5 5.5 0 0 1 5.5 5.5v1h-2v-1A3.5 3.5 0 0 0 12 7.5h-1zM9.83 8.079l-.61.793A3.48 3.48 0 0 0 8.5 11v2h-2v-2a5.48 5.48 0 0 1 1.134-3.345l.608-.793zM13 10v4c0 3.39-1.875 6.34-4.639 7.874l-.874.486l-.97-1.75l.874-.484A7 7 0 0 0 11 14v-4zm4.536 4.082l-.079.997a13.43 13.43 0 0 1-2.271 6.482l-.561.828l-1.656-1.122l.56-.828a11.4 11.4 0 0 0 1.935-5.518l.079-.997zm-9.163 1.381l-.516.857A4.5 4.5 0 0 1 4 18.5H2v-2h2c.908 0 1.704-.484 2.143-1.212l.517-.857z"></svg:path>`,
})
export class TdesignFingerprint3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
