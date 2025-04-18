import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnNotesIcon],svg[typcn-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.831 4.059a.5.5 0 0 0-.394-.121l-11 1.25A.5.5 0 0 0 7 5.684V16c-1.654 0-3 1.122-3 2.5S5.346 21 7 21s3-1.122 3-2.5v-7.609l6-.625V14c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5s3-1.122 3-2.5V4.434a.5.5 0 0 0-.169-.375"></svg:path>`,
})
export class TypcnNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
