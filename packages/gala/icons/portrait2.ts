import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaPortrait2Icon],svg[gala-portrait2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="m 49.616696,208.00014 c 0,0 30.383521,0 46.383451,-15.99992"></svg:path><svg:path d="m 96.000147,192.00022 c 0,0 15.999943,15.99992 31.999853,15.99992"></svg:path><svg:path d="m 206.38331,208.00012 c 0,0 -30.38351,2e-5 -46.38345,-15.9999"></svg:path><svg:path d="m 159.99986,192.00022 c 0,0 -15.99994,15.99992 -31.99986,15.99992"></svg:path><svg:path d="m 128,48.000858 c 31.99986,0 47.9998,15.999926 47.9998,63.999712 -1e-5,39.99983 -31.99988,63.99971 -47.9998,63.99971"></svg:path><svg:path d="m 128,48.000858 c -31.999857,0 -47.999787,15.999926 -47.999783,63.999712 3e-6,39.99983 31.999873,63.99971 47.999793,63.99971"></svg:path><svg:path d="m 159.99986,192.00022 -7.41601,-27.67694"></svg:path><svg:path d="m 96.000147,192.00022 7.416013,-27.67694"></svg:path><svg:circle cx="128" cy="128" r="111.999"></svg:circle></svg:g>`,
})
export class GalaPortrait2Icon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
