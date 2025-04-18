import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilDislikeSolidIcon],svg[basil-dislike-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.663 20.25a1.4 1.4 0 0 0 1.149-.6l4.232-6.077a5.75 5.75 0 0 0 .997-3.914l-.326-2.961a2.736 2.736 0 0 0-2.396-2.419L14.2 4.027a11.1 11.1 0 0 0-4.8.489a3.85 3.85 0 0 0-2.365 2.24L5.327 11.1q-.124.316-.17.652A2.818 2.818 0 0 0 8.57 14.88l3.77-.85a.1.1 0 0 1 .041 0q.017.005.035.023a.1.1 0 0 1 .02.034a.1.1 0 0 1 0 .04l-1.128 4.374a1.4 1.4 0 0 0 1.356 1.749"></svg:path>`,
})
export class BasilDislikeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
