import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMenyIcon],svg[arcticons-meny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.365 29.509V11.5L24 27.02l11.635-15.485v18M13.722 36.5l-1.357-4.325q1.82 1.096 3.439 2.35a37 37 0 0 1 2.015-3.63l.72 4.473m6.681-.415l.162-4.535a36 36 0 0 1 3.513 4.864l.647-4.492m6.093 1.385a36 36 0 0 0-2.588 1.623a37 37 0 0 0-1.487-2.663m.927 4.861l.56-2.199m-12.775-.945a37 37 0 0 1 1.93-.146"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.281 34.939q-1.391.029-2.778.17l-.462-4.514a39 39 0 0 1 3.145-.194"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMenyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
