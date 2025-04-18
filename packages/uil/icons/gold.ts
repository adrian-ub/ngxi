import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGoldIcon],svg[uil-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h8a1 1 0 0 0 .77-.37A1 1 0 0 0 17 9.8l-1-5a1 1 0 0 0-1-.8H9a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 8 11m1.82-5h4.36l.6 3H9.22ZM22 13.8a1 1 0 0 0-1-.8h-6a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 14 20h8a1 1 0 0 0 .77-.37a1 1 0 0 0 .23-.83ZM15.22 18l.6-3h4.36l.6 3ZM9 13H3a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 2 20h8a1 1 0 0 0 .77-.37a1 1 0 0 0 .23-.83l-1-5a1 1 0 0 0-1-.8m-5.78 5l.6-3h4.36l.6 3Z"></svg:path>`,
})
export class UilGoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
