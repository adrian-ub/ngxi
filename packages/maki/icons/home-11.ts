import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHome11Icon],svg[maki-home-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10.002 4.75a.25.25 0 0 1-.25.25H1.25A.25.25 0 0 1 1 4.75c0-.07.028-.14.08-.19l4.238-3.454l.016-.016a.248.248 0 0 1 .35.016L8 2.996V1.5a.5.5 0 0 1 1 0v2.31l.92.75c.052.05.081.119.08.19zM2 9.752a.248.248 0 0 0 .246.25h2.755v-2h1v2h2.752a.248.248 0 0 0 .248-.248V6.001H2v3.75z" fill="currentColor"></svg:path>`,
})
export class MakiHome11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
