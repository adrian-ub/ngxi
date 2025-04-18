import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiComputerMouseIcon],svg[openmoji-computer-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M38.41 11.95h-4.821c-7.25 0-13.18 4.932-13.18 12.18v23.74c0 7.25 5.932 12.18 13.18 12.18h4.821c7.25 0 13.18-4.932 13.18-12.18V24.13c0-7.25-5.932-12.18-13.18-12.18"></svg:path><svg:path fill="#3f3f3f" d="M36.15 17.93h-.308a2.565 2.565 0 0 0-2.558 2.558v7.94a2.565 2.565 0 0 0 2.558 2.558h.308a2.565 2.565 0 0 0 2.558-2.558v-7.94a2.565 2.565 0 0 0-2.558-2.558"></svg:path><svg:path fill="#9b9b9a" d="M34.79 12.79c3.959 1.699 7.723 4.137 8.161 10.3c.508 7.135-2.133 20.5-2.982 27.28c-.593 4.745-2.328 6.448-5.444 8.938c-1.571 1.256 6.7.674 10.182-1.362c2.989-1.747 3.972-3.422 5.791-6.533l.128-30.093s-1.225-9.075-11.2-9.078c0 0-10.01-.515-4.635.551z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M36.26 31.12h-.518a2.49 2.49 0 0 1-2.49-2.478v-8.126a2.49 2.49 0 0 1 2.49-2.478h.518a2.49 2.49 0 0 1 2.49 2.478v8.126a2.49 2.49 0 0 1-2.49 2.478"></svg:path><svg:path d="M39.61 60.05h-7.215c-6.475 0-11.77-5.263-11.77-11.7V23.64c0-6.432 5.298-11.7 11.77-11.7h7.215c6.475 0 11.77 5.263 11.77 11.7v24.71c0 6.432-5.298 11.7-11.77 11.7"></svg:path></svg:g>`,
})
export class OpenmojiComputerMouseIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
