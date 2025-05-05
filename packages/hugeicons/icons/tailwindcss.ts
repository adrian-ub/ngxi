import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTailwindcssIcon],svg[hugeicons-tailwindcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 6c-3.6 0-4.833 2.667-5 4c0 0 .819-1.588 2.863-1.588c2.5 0 2.704 3.588 7.204 3.588c3.645 0 4.766-2.483 4.933-3.724c0 0-.78 1.403-2.78 1.403C16.73 9.679 16.413 6 12 6m-5 6c-3.6 0-4.833 2.667-5 4c0 0 .819-1.588 2.863-1.588c2.5 0 2.704 3.588 7.204 3.588c3.645 0 4.766-2.483 4.933-3.725c0 0-.78 1.404-2.78 1.404C11.73 15.679 11.413 12 7 12" color="currentColor"></svg:path>`,
})
export class HugeiconsTailwindcssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
