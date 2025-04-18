import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousShinto11Icon],svg[maki-religious-shinto-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.25 2.009h-7.5a.75.75 0 0 0 0 1.5H2v5.25a.75.75 0 0 0 1.5 0v-2.75h4v2.75a.75.75 0 0 0 1.5 0v-5.25h.25a.75.75 0 0 0 0-1.5zM7.5 4.759H6v-1.25h1.5zm-4-1.25H5v1.25H3.5z" fill="currentColor"></svg:path>`,
})
export class MakiReligiousShinto11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
