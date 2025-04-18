import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoffeeCup2Icon],svg[lineicons-coffee-cup-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.969 4a.75.75 0 0 0-1.5 0v1.75a.75.75 0 1 0 1.5 0zM4 7.25a.75.75 0 0 0-.75.75v5.25a7.49 7.49 0 0 0 3 6H4a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5h-2.25a7.5 7.5 0 0 0 1.68-1.75H17a4.5 4.5 0 0 0 4.5-4.5v-1.25a2.25 2.25 0 0 0-2.25-2.25h-1V8a.75.75 0 0 0-.75-.75zm12.75 6a6 6 0 0 1-12 0v-4.5h12zm1.5-2.25h1a.75.75 0 0 1 .75.75V13a3 3 0 0 1-2.232 2.9a7.5 7.5 0 0 0 .482-2.65zm-7.5-7.75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75M7.031 4a.75.75 0 0 0-1.5 0v1.75a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class LineiconsCoffeeCup2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
