import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHorseToyIcon],svg[tabler-horse-toy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.5 17.5q8.5 7 17 0"></svg:path><svg:path d="M19 18.5L17 10l1-2l2 1l1.5-1.5L19 3c-5.052.218-5.99 3.133-7 6H6a3 3 0 0 0-3 3m2 6.5L7 9"></svg:path><svg:path d="m8 20l2-5h4l2 5"></svg:path></svg:g>`,
})
export class TablerHorseToyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
