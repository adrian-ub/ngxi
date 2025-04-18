import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStreeringWheelIcon],svg[hugeicons-streering-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.262c-5.11 0-9.25 4.14-9.25 9.25s4.14 9.25 9.25 9.25s9.25-4.14 9.25-9.25s-4.14-9.25-9.25-9.25m-10.75 9.25c0-5.94 4.81-10.75 10.75-10.75s10.75 4.81 10.75 10.75s-4.81 10.75-10.75 10.75s-10.75-4.81-10.75-10.75m18.49 1.85c.08.41-.19.8-.59.88a5.66 5.66 0 0 0-4.41 4.41a.76.76 0 0 1-.89.59a.757.757 0 0 1-.59-.88c.56-2.8 2.8-5.03 5.59-5.59c.41-.08.8.18.89.59m-14.89.89a.757.757 0 0 1-.59-.88a.76.76 0 0 1 .89-.59c2.79.56 5.03 2.79 5.59 5.59c.08.41-.19.8-.59.88a.76.76 0 0 1-.89-.59c-.44-2.2-2.2-3.97-4.41-4.41m7.15-3.99c-2.44 0-4.74.35-6.78.97a.75.75 0 0 1-.94-.5c-.12-.4.11-.82.5-.93c2.19-.66 4.64-1.03 7.22-1.03s5.03.37 7.22 1.03c.39.12.62.54.5.93a.75.75 0 0 1-.94.5c-2.04-.62-4.34-.97-6.78-.97m0 1.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h.01c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" color="currentColor"></svg:path>`,
})
export class HugeiconsStreeringWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
