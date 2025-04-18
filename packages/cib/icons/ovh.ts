import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibOvhIcon],svg[cib-ovh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.51 13.458l3.417-5.932A15.9 15.9 0 0 1 32 15.406c0 3.839-1.354 7.365-3.615 10.125h-8.823l2.719-4.719h-3.594l4.234-7.354zm-3.093-6.989L12.443 25.521l.005.01H3.615A15.93 15.93 0 0 1 0 15.406c0-2.87.76-5.557 2.083-7.891l5.724 9.953l6.328-11z"></svg:path>`,
})
export class CibOvhIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
