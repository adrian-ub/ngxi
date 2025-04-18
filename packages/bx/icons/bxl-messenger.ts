import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlMessengerIcon],svg[bx-bxl-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332c0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35c4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172l-2.305-2.394l-4.438 2.454l4.865-5.163l2.305 2.395l4.439-2.455l-4.866 5.163z" fill="currentColor"></svg:path>`,
})
export class BxBxlMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
