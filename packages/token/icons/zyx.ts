import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenZyxIcon],svg[token-zyx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.13 12.024l4.914-8.578c.117-.188-.023-.446-.257-.446H4.199c-.234 0-.35.235-.257.446L8.857 12l-4.915 8.577c-.117.188.023.423.257.423H19.81c.234 0 .351-.235.258-.423zm-3.465 7.543h-5.5l2.739-4.77l3.908-6.792a.93.93 0 0 0-.819-.47a.95.95 0 0 0-.82.47L9.7 10.567l-3.534-6.11h11.656l-2.739 4.77l-3.908 6.791a.9.9 0 0 0 .82.47a.95.95 0 0 0 .818-.47l1.475-2.561l.444.775c1.381 2.374-.327 5.335-3.066 5.335"></svg:path>`,
})
export class TokenZyxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
