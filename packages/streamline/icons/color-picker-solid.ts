import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineColorPickerSolidIcon],svg[streamline-color-picker-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.779 1.221c-1.6-1.61-4.27-1.61-5.869.002l-.813.813L5.03.97a.75.75 0 0 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-1.066-1.067l.813-.813c1.612-1.598 1.612-4.27.002-5.869M1.582 10.156L.33 11.409a1.13 1.13 0 0 0 0 1.595l.667.667a1.13 1.13 0 0 0 1.595 0l1.253-1.253a3.425 3.425 0 0 0 3.993-.6l2.095-2.095l-5.655-5.655l-2.095 2.095a3.425 3.425 0 0 0-.6 3.993Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineColorPickerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
