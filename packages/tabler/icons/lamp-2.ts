import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLamp2Icon],svg[tabler-lamp-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21h9m-4 0l-7-8l8.5-5.5"></svg:path><svg:path d="M13 14c-2.148-2.148-2.148-5.852 0-8c2.088-2.088 5.842-1.972 8 0z"></svg:path><svg:path d="m11.742 7.574l-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144M15.5 12l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4l-.366-.369"></svg:path></svg:g>`,
})
export class TablerLamp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
