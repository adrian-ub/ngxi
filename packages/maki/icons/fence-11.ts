import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFence11Icon],svg[maki-fence-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.5 7H9V5h.5a.5.5 0 0 0 0-1H9V3l-.278-.555a.254.254 0 0 0-.443 0L8 3v1H7V3l-.278-.555a.254.254 0 0 0-.443 0L6 3v1H5V3l-.278-.555a.254.254 0 0 0-.443 0L4 3v1H3V3l-.278-.555a.254.254 0 0 0-.443 0L2 3v1h-.5a.5.5 0 0 0 0 1H2v2h-.5a.5.5 0 0 0 0 1H2v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1zM3 7V5h1v2zm2 0V5h1v2zm2 0V5h1v2z" fill="currentColor"></svg:path>`,
})
export class MakiFence11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
