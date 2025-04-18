import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCheeseOutlineIcon],svg[flowbite-cheese-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12l6.427-4.66a2.006 2.006 0 0 0 2.789.473c.896-.638 1.349-1.692.468-2.801C13.637 4.953 14.91 4 15 4s5 1 5 8M4 12h16M4 12v8h16v-8M8 15h.01M12 17h.01M16 15h.01"></svg:path>`,
})
export class FlowbiteCheeseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
