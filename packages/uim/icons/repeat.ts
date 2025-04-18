import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimRepeatIcon],svg[uim-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.498 22a1 1 0 0 1-.707-.293l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414L10.412 18.5l1.793 1.793A1 1 0 0 1 11.498 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21 4.5h-2a1 1 0 0 0 0 2h1v11h-8.588l-1 1l1 1H21a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.5 2c.265 0 .52.105.707.293l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414L13.586 5.5l-1.793-1.793A1 1 0 0 1 12.5 2"></svg:path><svg:path fill="currentColor" d="M5 17.5H4v-11h8.586l1-1l-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2"></svg:path>`,
})
export class UimRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
