import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousShintoIcon],svg[maki-religious-shinto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2.5h-10a.945.945 0 0 0-1 1a.945.945 0 0 0 1 1H3V12a.945.945 0 0 0 1 1a.945.945 0 0 0 1-1V8h5v4a.945.945 0 0 0 1 1a.945.945 0 0 0 1-1V4.5h.5a.945.945 0 0 0 1-1a.945.945 0 0 0-1-1M10 6H8V4.5h2ZM7 6H5V4.5h2Z"></svg:path>`,
})
export class MakiReligiousShintoIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
