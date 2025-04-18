import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSpoonIcon],svg[whh-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.613 989.5q-25.5 25.5-58.5 32t-70.5-9.5t-72.5-54l-358-419q-46 29-95.5 35.5t-103-13.5t-103.5-70q-62-62-97.5-145.5t-31.5-164T53.613 53t129-52t164 31.5t145.5 97.5q49 49 69.5 103t13.5 103t-36 96l420 356q38 34 54.5 72t10 71t-32 58.5"></svg:path>`,
})
export class WhhSpoonIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
