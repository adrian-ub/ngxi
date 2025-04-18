import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiDentist11Icon],svg[maki-dentist-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.48 6A2 2 0 0 0 4 7c-.46 1.21-.14 3-.82 3S2.7 8.49 2.5 7a16.259 16.259 0 0 0-.76-1.89C1.53 3.7 1 1.28 2.67 1S4.35 2.52 5.5 2.52S6.67.72 8.33 1s1.14 2.7.93 4.11A16.259 16.259 0 0 0 8.5 7c-.2 1.49 0 3-.68 3S7.46 8.21 7 7a2 2 0 0 0-1.48-1h-.04z" fill="currentColor"></svg:path>`,
})
export class MakiDentist11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
