import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTelevisionIcon],svg[pepicons-pencil-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.25 9v5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-7.5a3 3 0 0 0-3 3m3 7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2z" clip-rule="evenodd"></svg:path><svg:path d="m9.86 5.688l2-2.5c.416-.52 1.197.104.78.624l-2 2.5c-.416.52-1.197-.104-.78-.624"></svg:path><svg:path d="m8.86 6.312l-2-2.5c-.417-.52.364-1.145.78-.624l2 2.5c.417.52-.364 1.145-.78.624"></svg:path></svg:g>`,
})
export class PepiconsPencilTelevisionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
