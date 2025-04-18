import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCoffeeMachineIcon],svg[icon-park-outline-coffee-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 42h29a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H17"></svg:path><svg:path d="M22 36c5.523 0 10-4.477 10-10H12c0 5.523 4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" d="M16 18v2m6-2v2m6-2v2"></svg:path></svg:g>`,
})
export class IconParkOutlineCoffeeMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
