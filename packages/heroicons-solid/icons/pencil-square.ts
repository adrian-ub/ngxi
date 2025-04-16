import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidPencilSquareIcon],svg[heroicons-solid-pencil-square-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.433 13.916l1.262-3.154a4 4 0 0 1 .885-1.343L14.5 2.5a2.121 2.121 0 1 1 3 3l-6.92 6.919c-.383.383-.84.684-1.343.885l-3.154 1.262a.5.5 0 0 1-.65-.65ZM2.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H3.75A2.75 2.75 0 0 0 1 5.75v10.5A2.75 2.75 0 0 0 3.75 19h10.5A2.75 2.75 0 0 0 17 16.25V10a.75.75 0 0 0-1.5 0v6.25c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V5.75Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidPencilSquareIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
