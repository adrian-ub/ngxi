import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiYenBanknoteIcon],svg[openmoji-yen-banknote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M10.104 20.134h51.242v32.634H10.104z"></svg:path><svg:path fill="#ea5a47" d="M15.33 24.4h40.032v24.2H15.33z"></svg:path><svg:path fill="#f4aa41" d="M55.82 20.62h4.63v.19h-4.63z"></svg:path><svg:circle cx="46.302" cy="34.578" r="5.933" fill="#fff"></svg:circle><svg:path fill="#d0cfce" d="M37.494 21.952v29.097c0 .104-.02.2-.05.295a1 1 0 0 1-.95.656h-15.34a1 1 0 0 1-.95-.656a1 1 0 0 1-.05-.295V21.952c0-.105.02-.2.05-.295a1 1 0 0 1 .95-.657h15.34a1 1 0 0 1 .95.657c.03.095.05.19.05.295"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:circle cx="46.302" cy="34.578" r="5.933" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.494 21.952v29.097c0 .104-.02.2-.05.295a1 1 0 0 1-.95.656h-15.34a1 1 0 0 1-.95-.656a1 1 0 0 1-.05-.295V21.952c0-.105.02-.2.05-.295a1 1 0 0 1 .95-.657h15.34a1 1 0 0 1 .95.657c.03.095.05.19.05.295"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.037 41v-3.87l2.58-5.16l-2.58 5.16l-2.58-5.16m.131 4.498h4.863M15.706 52.079h-3.63a1 1 0 0 1-1-1v-29.2a1 1 0 0 1 1-1h3.63M42 21l17.446-.122a1 1 0 0 1 1 1V51.08a1 1 0 0 1-1 1L42 52"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 25.156h13.817V47.83H42M15.706 48V25.156"></svg:path></svg:g>`,
})
export class OpenmojiYenBanknoteIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
