import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmRocketIcon],svg[charm-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.25 9.75l-2-.5s0-1.5.5-3s4-1.5 4-1.5m-.5 7l.5 2s1.5 0 3-.5s1.5-4 1.5-4m-7 .5l2 2s5-2 6.5-4.5s1.5-5.5 1.5-5.5s-3 0-5.5 1.5s-4.5 6.5-4.5 6.5"></svg:path><svg:path fill="currentColor" d="m1.75 14.25l2-1l-1-1z"></svg:path><svg:circle cx="10.25" cy="5.75" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmRocketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
