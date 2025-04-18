import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxAngryIcon],svg[bx-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3m-2.439-2.439c.014-.014.023-.03.037-.044l1.031.413l.742-1.857l-5-2l-.742 1.856l1.373.549L7 10.5a1.499 1.499 0 0 0 2.561 1.061m3.068-1.49l.742 1.857l1.037-.415l.029.035a1.49 1.49 0 0 0 2.112 0c.271-.271.438-.644.438-1.056l-.001-.01l1.386-.554l-.742-1.857z"></svg:path>`,
})
export class BxAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
