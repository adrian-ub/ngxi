import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCampsite11Icon],svg[maki-campsite-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.92 2.19a.5.5 0 0 0-.85 0L1.5 8h-1a.42.42 0 0 0-.5.39V9.5a.49.49 0 0 0 .5.5h10a.49.49 0 0 0 .5-.5V8.39a.42.42 0 0 0-.5-.39h-1L5.92 2.19zM5.5 3l3 5h-6l3-5z" fill="currentColor"></svg:path>`,
})
export class MakiCampsite11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
