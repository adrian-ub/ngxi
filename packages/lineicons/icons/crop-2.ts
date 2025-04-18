import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCrop2Icon],svg[lineicons-crop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.023 2.75a.75.75 0 0 0-1.5 0V4.5h-1.75a.75.75 0 1 0 0 1.5h1.75v11.25a2.25 2.25 0 0 0 2.25 2.25h11.25v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 1 0 0-1.5h-1.75V5.56l1.78-1.78a.75.75 0 1 0-1.06-1.06l-1.78 1.78H6.023zM16.963 6L6.023 16.94V6zM7.084 18l10.94-10.94V18z"></svg:path>`,
})
export class LineiconsCrop2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
