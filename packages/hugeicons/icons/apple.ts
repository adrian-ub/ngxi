import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAppleIcon],svg[hugeicons-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.177 5.177c-1.083 1.084-3.14.785-3.14.785s-.298-2.056.786-3.14c1.083-1.083 3.14-.784 3.14-.784s.298 2.056-.786 3.14M4 14.06c0 3.281 2.196 7.05 4.419 7.847c.77.276 1.567-.105 2.229-.58c.502-.36 1.11-.703 1.602-.703c.49 0 1.1.343 1.601.703c.662.475 1.459.856 2.23.58c1.579-.566 3.145-2.633 3.919-4.96c-1.5-.43-2.594-1.786-2.594-3.393c0-1.472.919-2.734 2.226-3.265C18.79 8.793 17.414 8 15.859 8c-.804 0-1.544.324-2.14.713c-.954.62-1.985.62-2.938 0C10.184 8.324 9.445 8 8.641 8C6.077 8 4 10.155 4 14.06" color="currentColor"></svg:path>`,
})
export class HugeiconsAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
