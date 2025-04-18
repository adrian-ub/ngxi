import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9SquareThinIcon],svg[iconamoon-number-9-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="currentColor" d="M10.582 16.726a.5.5 0 1 0 .836.548zm4.361-4.831a.5.5 0 1 0-.836-.548zM9.5 10A2.5 2.5 0 0 1 12 7.5v-1A3.5 3.5 0 0 0 8.5 10zM12 7.5a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 12 6.5zm2.5 2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zM12 12.5A2.5 2.5 0 0 1 9.5 10h-1a3.5 3.5 0 0 0 3.5 3.5zm-.582 4.774l3.525-5.38l-.836-.547l-3.525 5.379z"></svg:path></svg:g>`,
})
export class IconamoonNumber9SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
