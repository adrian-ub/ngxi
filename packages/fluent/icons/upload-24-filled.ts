import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUpload24FilledIcon],svg[fluent-upload-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.25 20.5h13.498a.75.75 0 0 1 .101 1.493l-.101.007H5.25a.75.75 0 0 1-.102-1.493l.102-.007h13.498H5.25zM6.293 7.29l4.998-4.997a1 1 0 0 1 1.32-.084l.093.083l5.004 4.997a1 1 0 0 1-1.32 1.498l-.094-.083L13 5.413V18a1 1 0 0 1-.884.993L12 19a1 1 0 0 1-.993-.883L10.999 18L11 5.41L7.707 8.704a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.095l4.998-4.996l-4.998 4.996z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentUpload24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
