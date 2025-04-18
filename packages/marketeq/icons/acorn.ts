import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAcornIcon],svg[marketeq-acorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m37.5 20.833l-.937 8.542a17.42 17.42 0 0 1-10.792 14.23v0a2.08 2.08 0 0 1-1.542 0v0a17.42 17.42 0 0 1-10.791-14.23l-.938-8.542zM27.083 6.25A10.2 10.2 0 0 0 25 12.5"></svg:path><svg:path stroke="#344054" d="M16.667 12.5h16.666a6.25 6.25 0 0 1 6.25 6.25a2.083 2.083 0 0 1-2.083 2.083h-25a2.083 2.083 0 0 1-2.083-2.083a6.25 6.25 0 0 1 6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqAcornIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
