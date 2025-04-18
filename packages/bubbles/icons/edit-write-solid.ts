import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditWriteSolidIcon],svg[bubbles-edit-write-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.658.54a3.1 3.1 0 0 0-1.778.755c-.02.017-2.388 2.382-5.262 5.256c-3.348 3.346-5.236 5.24-5.253 5.265a1 1 0 0 0-.042.08c-.009.02-.302 1.153-.651 2.515l-.636 2.477v.097c0 .09.002.102.02.153c.087.236.324.37.565.319a765 765 0 0 0 4.995-1.286l.076-.043a4703 4703 0 0 0 10.51-10.505a3.1 3.1 0 0 0 .739-1.62c.04-.302.033-.659-.02-.954A3.055 3.055 0 0 0 15.508.591c-.2-.04-.323-.052-.565-.055a4 4 0 0 0-.285.004m.12.973a2.1 2.1 0 0 0-1.267.53l-.052.049l1.475 1.475L16.41 5.04l.059-.066c.362-.41.549-.948.519-1.494a2.1 2.1 0 0 0-.424-1.155a2.3 2.3 0 0 0-.541-.495a2.1 2.1 0 0 0-1.246-.318m-6.66 5.921L3.47 12.082l1.474 1.474l1.474 1.474l4.65-4.65l4.649-4.649l-1.473-1.472c-.81-.81-1.474-1.473-1.476-1.473s-2.095 2.092-4.65 4.648m-5.084 5.6l-.418 1.633c-.23.896-.416 1.63-.415 1.631s3.15-.803 3.236-.827l.03-.009l-1.216-1.217c-.67-.669-1.217-1.214-1.217-1.212" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditWriteSolidIcon {
  readonly viewBox = input("0 0 19 18")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
