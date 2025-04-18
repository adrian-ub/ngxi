import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMushroomIcon],svg[openmoji-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" stroke="#D0CFCE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27.124 42.962v11.254s-.117 1.901 2.527 1.901h11.77s2.254.557 2.254-2.408V42.96"></svg:path><svg:path fill="#D0CFCE" d="M27.124 46.732v8.04s-.117 1.357 2.527 1.357h11.77s2.254.397 2.254-1.72v-7.677"></svg:path><svg:path fill="#EA5A47" d="M60.996 33.958c0 8.837-11.193 9-25 9s-25-.163-25-9s11.193-23 25-23s25 14.164 25 23"></svg:path><svg:path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M60.996 33.958c0 8.837-11.193 9-25 9s-25-.163-25-9s11.193-23 25-23s25 14.164 25 23"></svg:path><svg:path fill="#D22F27" d="M60.996 33.96c0 8.837-11.194 9.001-25.004 9.001c33.174-7.596 0-32.003 0-32.003c13.81 0 25.004 14.164 25.004 23.001"></svg:path><svg:path fill="#FFF" d="M22.742 15.387s4.692 14.121-10.925 14.012c0 0 3.005-9.064 10.925-14.012"></svg:path><svg:ellipse cx="35.996" cy="30.149" fill="#FFF" rx="8.021" ry="6.176" transform="rotate(-2.189 35.99 30.143)"></svg:ellipse><svg:path fill="#D0CFCE" d="M49.155 15.387S44.463 29.508 60.08 29.399c0 0-3.005-9.064-10.925-14.012"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M27.124 46.732v8.04s-.117 1.357 2.527 1.357h11.77s2.254.397 2.254-1.72v-7.677m17.321-12.774c0 8.837-11.193 9-25 9s-25-.163-25-9s11.193-23 25-23s25 14.164 25 23"></svg:path><svg:path d="M60.996 33.958c0 8.837-11.193 9-25 9s-25-.163-25-9s11.193-23 25-23s25 14.164 25 23"></svg:path><svg:path d="M22.742 15.387s4.692 14.121-10.925 14.012c0 0 3.005-9.064 10.925-14.012"></svg:path><svg:ellipse cx="35.996" cy="30.149" rx="8.021" ry="6.176" transform="rotate(-2.189 35.99 30.143)"></svg:ellipse><svg:path d="M49.155 15.387S44.463 29.508 60.08 29.399c0 0-3.005-9.064-10.925-14.012"></svg:path></svg:g>`,
})
export class OpenmojiMushroomIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
