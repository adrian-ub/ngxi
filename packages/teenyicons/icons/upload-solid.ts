import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsUploadSolidIcon],svg[teenyicons-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.486.807l3.603 3.326l-.678.734L8 2.642V11H7V2.707L4.854 4.854l-.708-.708zM2 13V7H1v7h13V7h-1v6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsUploadSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
