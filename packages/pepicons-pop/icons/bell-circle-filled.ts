import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBellCircleFilledIcon],svg[pepicons-pop-bell-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBellCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M10.5 20a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M21 17.5a3.46 3.46 0 0 0-1.5-2.851V12a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 5 17.5A2.5 2.5 0 0 0 7.5 20h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.236.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.093.857-1.33l.053-.023l.59-.265V12a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z" clip-rule="evenodd"></svg:path><svg:path d="M12 4.5a1 1 0 0 1 2 0V7a1 1 0 1 1-2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBellCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBellCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
