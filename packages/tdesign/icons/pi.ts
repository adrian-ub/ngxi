import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPiIcon],svg[tdesign-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.161 3h18.258v2h-5.61a111 111 0 0 0-.414 7.741c-.024 1.49-.006 2.85.07 3.9q.058.791.15 1.264c.055.284.102.383.1.385c.64.81 2.544 1.31 4.583-.699l.712-.702l1.404 1.425l-.713.702c-2.59 2.552-5.988 2.575-7.594.465c-.262-.345-.383-.821-.456-1.194c-.082-.424-.14-.938-.181-1.503c-.082-1.133-.1-2.56-.075-4.075A113 113 0 0 1 13.801 5h-3.466c-.163 2.463-.615 5.692-1.52 8.542c-.512 1.619-1.187 3.167-2.076 4.39c-.889 1.225-2.052 2.203-3.546 2.497l-.981.193l-.387-1.962l.981-.193c.829-.163 1.601-.726 2.315-1.71c.714-.983 1.31-2.31 1.788-3.82C7.737 10.33 8.168 7.33 8.331 5H3.16zm12.553 15.29l-.015-.02z"></svg:path>`,
})
export class TdesignPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
