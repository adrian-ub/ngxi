import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons5Icon],svg[healthicons-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M34 12a2 2 0 0 0-2-2H18a2 2 0 0 0-1.961 1.608l-2 10a2 2 0 0 0 3.07 2.056C17.781 23.216 20.395 22 24 22a6 6 0 0 1 0 12h-2.218c-1.823 0-3.344-1.137-3.901-2.68a2 2 0 1 0-3.762 1.36c1.126 3.118 4.147 5.32 7.663 5.32H24c5.523 0 10-4.477 10-10s-4.477-10-10-10c-2.014 0-3.815.304-5.304.72L19.64 14H32a2 2 0 0 0 2-2" clip-rule="evenodd"></svg:path>`,
})
export class Healthicons5Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
