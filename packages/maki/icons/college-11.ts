import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCollege11Icon],svg[maki-college-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 7.3c.3-.2.5-.5.5-.8c0-.4-.2-.7-.6-.9V4.4L5.5 6L11 3.5L5.5 1L0 3.5l1.2.5v1.6c-.4.2-.6.5-.6.9c0 .3.2.6.5.8L.6 9c-.3 1 .5 1 .5 1h1s.8 0 .5-1L2 7.3z" fill="currentColor"></svg:path><svg:path d="M3.5 6.2v.3c0 .4-.2.8-.4 1.1c.2.4.4.8.4 1.4v.6c.5.2 1.2.4 2 .4C8 10 9 8.5 9 8.5v-3L5.5 7.1l-2-.9z" fill="currentColor"></svg:path>`,
})
export class MakiCollege11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
