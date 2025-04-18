import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ItalicIcon],svg[icons8-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.75 5l-.063.938l-.187 3L11.437 10h2.001l-.876 12h-2l-.062.938l-.188 3L10.22 27h10.03l.063-.938l.187-3L20.563 22h-2.001l.875-12h2.001l.062-.938l.188-3L21.78 5zm1.875 2h6l-.063 1h-2l-.062.938l-1 14L16.437 24h2.001l-.063 1h-6l.063-1h2l.062-.938l1-14L15.563 8h-2.001z"></svg:path>`,
})
export class Icons8ItalicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
