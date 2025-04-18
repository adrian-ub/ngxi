import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDialogflowIcon],svg[simple-icons-dialogflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 0a1.64 1.64 0 0 0-.82.22L3.344 4.74a1.65 1.65 0 0 0-.535.498l9.136 5.28l9.213-5.32a1.65 1.65 0 0 0-.51-.458L12.818.22a1.64 1.64 0 0 0-.822-.22m9.336 5.5l-9.387 5.422l-9.3-5.373a1.7 1.7 0 0 0-.12.615v9.043a1.64 1.64 0 0 0 .819 1.42l3.918 2.266v4.617a.493.493 0 0 0 .74.424l12.654-7.303a1.64 1.64 0 0 0 .819-1.42V6.162a1.65 1.65 0 0 0-.143-.662"></svg:path>`,
})
export class SimpleIconsDialogflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
