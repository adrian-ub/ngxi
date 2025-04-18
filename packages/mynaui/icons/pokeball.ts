import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPokeballIcon],svg[mynaui-pokeball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2-2h7M3 12h7"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiPokeballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
