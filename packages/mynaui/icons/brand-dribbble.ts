import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandDribbbleIcon],svg[mynaui-brand-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path d="M3.07 10.875c1.7.102 6.2.195 9.08-1.035s5.358-3.492 6.208-4.21"></svg:path><svg:path d="M8.625 3.654c1.409 1.3 4.482 4.61 5.625 7.896s1.566 7.326 1.827 8.476"></svg:path><svg:path d="M21 12c-1.313 0-4.936-.495-8.178.928c-3.522 1.547-6.072 3.946-7.184 5.438"></svg:path></svg:g>`,
})
export class MynauiBrandDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
