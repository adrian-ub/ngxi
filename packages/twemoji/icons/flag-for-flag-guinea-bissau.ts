import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagGuineaBissauIcon],svg[twemoji-flag-for-flag-guinea-bissau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCD116" d="M32 5H15v13h21V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#009E49" d="M15 31h17a4 4 0 0 0 4-4v-9H15v13z"></svg:path><svg:path fill="#CE1126" d="M15 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h11V5zm-5 17l-2.547-1.851L4.906 22l.973-2.994l-2.547-1.851H6.48l.973-2.994l.973 2.994h3.148l-2.547 1.851L10 22z"></svg:path><svg:path d="M8.426 17.155l-.973-2.994l-.973 2.994H3.332l2.547 1.851L4.906 22l2.547-1.851L10 22l-.973-2.994l2.547-1.851z" fill="#000"></svg:path>`,
})
export class TwemojiFlagForFlagGuineaBissauIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
