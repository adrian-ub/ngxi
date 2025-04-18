import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneTramIcon],svg[emojione-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3e4347"><svg:path d="M43.9 7.4h-2.6c0-1.6-1.4-2.9-3.1-2.9H25.8c-1.7 0-3.1 1.3-3.1 2.9h-2.6c0-3 2.6-5.4 5.7-5.4h12.4c3.1 0 5.7 2.4 5.7 5.4"></svg:path><svg:path d="m28.5 10.5l-1.4.5l-2.9-7.5l1.4-.5zm7 0l1.4.5l2.9-7.5l-1.4-.5z"></svg:path></svg:g><svg:path fill="#94989b" d="M17.4 50.2L9.4 62h4.3l7.8-11.8z"></svg:path><svg:path fill="#e6e6e6" d="M17.4 50.2h-4L4 62h5.4z"></svg:path><svg:path fill="#94989b" d="M46.6 50.2h-4.1L50.3 62h4.3z"></svg:path><svg:path fill="#e6e6e6" d="m46.6 50.2l8 11.8H60l-9.4-11.8z"></svg:path><svg:path fill="#666" d="M43.2 51.3H20.8L13.7 62h36.6z"></svg:path><svg:path fill="#c7e755" d="M53.3 48c0 14.6-42.5 14.6-42.5 0V23.1c0-18.6 42.5-18.6 42.5 0z"></svg:path><svg:path fill="#dae3ea" d="M53.3 39.7H10.7V23.1c0-18.6 42.5-18.6 42.5 0c.1 0 .1 16.6.1 16.6"></svg:path><svg:path fill="#83bf4f" d="M50.8 48.3c0 1.1-1.1 2.1-2.4 2.1h-5.8c-1.3 0-2.4-.9-2.4-2.1c0-1.1 1.1-2.1 2.4-2.1h5.8c1.3 0 2.4 1 2.4 2.1m-37.6 0c0-1.1 1.1-2.1 2.4-2.1h5.8c1.3 0 2.4.9 2.4 2.1c0 1.1-1.1 2.1-2.4 2.1h-5.8c-1.3 0-2.4-1-2.4-2.1"></svg:path><svg:path fill="#d6eef0" d="M16.9 48.3c0-1.1 1.1-2.1 2.4-2.1h2.1c1.3 0 2.4.9 2.4 2.1c0 1.1-1.1 2.1-2.4 2.1h-2.1c-1.3 0-2.4-1-2.4-2.1m23.2 0c0-1.1 1.1-2.1 2.4-2.1h2.1c1.3 0 2.4.9 2.4 2.1c0 1.1-1.1 2.1-2.4 2.1h-2.1c-1.3 0-2.4-1-2.4-2.1"></svg:path><svg:path fill="#3e4347" d="M50.7 39.7c0 1.6-37.4 1.6-37.4 0V21.1c0-1.6 37.4-1.6 37.4 0z"></svg:path>`,
})
export class EmojioneTramIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
