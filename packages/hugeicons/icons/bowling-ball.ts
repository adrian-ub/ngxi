import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBowlingBallIcon],svg[hugeicons-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.063c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 1.313 12 1.313S1.25 6.133 1.25 12.063m1.5 0c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25s-9.25-4.15-9.25-9.25M14 6.073c0 .55.45 1 1 1v.01c.55 0 1-.45 1-1.01s-.45-1-1-1s-1 .45-1 1m4 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .44 1 1s-.45 1.01-1 1.01zm-5 0c0 .55.45 1 1 1v.01c.55 0 1-.45 1-1.01s-.45-1-1-1s-1 .45-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsBowlingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
