import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaFilterIcon],svg[iwwa-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.008 5.426a.12.12 0 0 0-.131-.032L7.749 13.566a.125.125 0 0 0-.017.229l12.992 6.685v14.128c0 .047.026.09.069.111a.1.1 0 0 0 .056.014a.13.13 0 0 0 .074-.024l5.338-3.932a.13.13 0 0 0 .051-.101V19.67l5.721-14.111a.13.13 0 0 0-.025-.133M25.37 19.391a.1.1 0 0 0-.009.047l-.027 10.809l-3.632 2.676V19.961a.12.12 0 0 0-.068-.111L9.968 13.847l20.459-6.93z"></svg:path>`,
})
export class IwwaFilterIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
