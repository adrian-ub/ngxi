import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWatch11Icon],svg[maki-watch-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.077 5.154h-.112A3.483 3.483 0 0 0 7 2.35V1H4v1.35c-1.18.563-2 1.756-2 3.15s.82 2.587 2 3.15V10h3V8.65a3.482 3.482 0 0 0 1.965-2.804h.112a.346.346 0 1 0 0-.692zM5.5 8a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z" fill="currentColor"></svg:path><svg:path d="M6.5 5H6V4a.5.5 0 1 0-1 0v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1z" fill="currentColor"></svg:path>`,
})
export class MakiWatch11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
