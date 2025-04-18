import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorEdit02Icon],svg[hugeicons-cursor-edit-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3c0-.471 0-.707-.146-.854C15.707 2 15.47 2 15 2h-1c-.471 0-.707 0-.854.146C13 2.293 13 2.53 13 3v1c0 .471 0 .707.146.854C13.293 5 13.53 5 14 5h1c.471 0 .707 0 .854-.146C16 4.707 16 4.47 16 4zM8.333 8.407C9.938 6.68 22.01 10.913 22 12.46c-.011 1.752-4.714 2.292-6.018 2.658c-.784.22-.994.445-1.175 1.267c-.818 3.723-1.23 5.574-2.166 5.616c-1.493.066-5.874-11.906-4.308-13.593M5 3c0-.471 0-.707-.146-.854C4.707 2 4.47 2 4 2H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v1c0 .471 0 .707.146.854C2.293 5 2.53 5 3 5h1c.471 0 .707 0 .854-.146C5 4.707 5 4.47 5 4zm0 11c0-.471 0-.707-.146-.854C4.707 13 4.47 13 4 13H3c-.471 0-.707 0-.854.146C2 13.293 2 13.53 2 14v1c0 .471 0 .707.146.854C2.293 16 2.53 16 3 16h1c.471 0 .707 0 .854-.146C5 15.707 5 15.47 5 15zm-1.5-1V5M13 3.5H5" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorEdit02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
