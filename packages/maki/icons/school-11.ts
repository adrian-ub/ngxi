import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSchool11Icon],svg[maki-school-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.5 9V8H10V6H7.5V5H10V3H8.5V2H10V1H6v9h4V9H8.5zM4 7H1V1h3v6zm0 1l-1.5 2L1 8h3z" fill="currentColor"></svg:path>`,
})
export class MakiSchool11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
