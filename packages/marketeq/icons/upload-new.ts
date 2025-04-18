import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUploadNewIcon],svg[marketeq-upload-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 25v18.75m6.479-14.625L24.854 22.5l-6.334 6.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 31.48a13.73 13.73 0 1 1 20.833-15.084a9.6 9.6 0 0 1 1.73-.167A8.73 8.73 0 0 1 37.5 33.333"></svg:path></svg:g>`,
})
export class MarketeqUploadNewIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
