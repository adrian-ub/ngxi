import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTelephone11Icon],svg[maki-telephone-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 9.4a.73.73 0 0 0 1 0l.74-.74a.73.73 0 0 0 0-1zm4.56-4.6a.73.73 0 0 0 1 0l.71-.71a.73.73 0 0 0 0-1zM5.88 3.57L3.57 5.88a.37.37 0 0 0 0 .52l.43.44L2.26 8.6a2.27 2.27 0 0 1-.73-1.34v-1a1.345 1.345 0 0 1 .52-1l3.21-3.21a1.345 1.345 0 0 1 1-.52h1a2.27 2.27 0 0 1 1.34.73L6.84 4l-.44-.43a.37.37 0 0 0-.52 0" fill="currentColor"></svg:path>`,
})
export class MakiTelephone11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
