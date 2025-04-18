import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCosIcon],svg[hugeicons-cos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 9.5a2.5 2.5 0 0 1 5 0v5a2.5 2.5 0 0 1-5 0zm12.19-.884C21.264 7.652 20.443 7 19.5 7H19c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5h1c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5h-.5c-1.025 0-1.906-.771-2.292-1.875M7 8.314C6.55 7.532 5.67 7 4.659 7C3.19 7 2 8.12 2 9.5v5C2 15.88 3.19 17 4.659 17C5.67 17 6.55 16.468 7 15.686" color="currentColor"></svg:path>`,
})
export class HugeiconsCosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
