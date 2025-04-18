import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorEdit01Icon],svg[hugeicons-cursor-edit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3c0-.471 0-.707-.146-.854C15.707 2 15.47 2 15 2h-1c-.471 0-.707 0-.854.146C13 2.293 13 2.53 13 3v1c0 .471 0 .707.146.854C13.293 5 13.53 5 14 5h1c.471 0 .707 0 .854-.146C16 4.707 16 4.47 16 4zM5 3c0-.471 0-.707-.146-.854C4.707 2 4.47 2 4 2H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v1c0 .471 0 .707.146.854C2.293 5 2.53 5 3 5h1c.471 0 .707 0 .854-.146C5 4.707 5 4.47 5 4zm0 11c0-.471 0-.707-.146-.854C4.707 13 4.47 13 4 13H3c-.471 0-.707 0-.854.146C2 13.293 2 13.53 2 14v1c0 .471 0 .707.146.854C2.293 16 2.53 16 3 16h1c.471 0 .707 0 .854-.146C5 15.707 5 15.47 5 15zm6.54 6.684c-2.306.159-4.591-10.597-3.022-12.166s12.325.714 12.166 3.02c-.11 1.51-2.667 2.108-2.592 3.45c.022.394.519.752 1.512 1.469c.69.498 1.394.981 2.072 1.495c.271.205.378.55.298.875a4.26 4.26 0 0 1-3.146 3.147a.84.84 0 0 1-.875-.298c-.514-.678-.998-1.382-1.496-2.072c-.716-.994-1.074-1.49-1.468-1.512c-1.342-.075-1.939 2.482-3.45 2.592M3.5 13V5M13 3.5H5" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorEdit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
