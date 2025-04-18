import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMacysIcon],svg[simple-icons-macys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.015.624L9.19 9.293H0l7.445 5.384l-2.819 8.673L12 17.986l7.422 5.393l-2.835-8.713L24 9.292h-9.162L12.015.622z"></svg:path>`,
})
export class SimpleIconsMacysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
