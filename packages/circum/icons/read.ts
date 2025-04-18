import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumReadIcon],svg[circum-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.883a10.8 10.8 0 0 1-9.675-5.728a2.6 2.6 0 0 1 0-2.31A10.8 10.8 0 0 1 12 5.117a10.8 10.8 0 0 1 9.675 5.728a2.6 2.6 0 0 1 0 2.31A10.8 10.8 0 0 1 12 18.883m0-12.766a9.79 9.79 0 0 0-8.78 5.176a1.59 1.59 0 0 0 0 1.415A9.79 9.79 0 0 0 12 17.883a9.79 9.79 0 0 0 8.78-5.176a1.58 1.58 0 0 0 0-1.414A9.79 9.79 0 0 0 12 6.117"></svg:path><svg:path fill="currentColor" d="M12 16.049A4.049 4.049 0 1 1 16.049 12A4.054 4.054 0 0 1 12 16.049m0-7.1A3.049 3.049 0 1 0 15.049 12A3.05 3.05 0 0 0 12 8.951Z"></svg:path><svg:circle cx="12" cy="12" r="2.028" fill="currentColor"></svg:circle>`,
})
export class CircumReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
