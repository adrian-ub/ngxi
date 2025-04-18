import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsNodejsIcon],svg[proicons-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.75 8.5v7.964c0 .866-.456 1.626-1.142 2.052c-.745.463-1.672.13-2.432-.308l-1.43-.826a2.07 2.07 0 0 1-1.034-1.792V8.41c0-.74.394-1.423 1.035-1.792l6.218-3.59a2.07 2.07 0 0 1 2.07 0l6.218 3.59a2.07 2.07 0 0 1 1.035 1.792v7.18a2.07 2.07 0 0 1-1.035 1.792l-6.218 3.59a2.07 2.07 0 0 1-2.07 0l-.989-.57"></svg:path><svg:path d="M17.29 8.5h-2.75a1.75 1.75 0 0 0-1.75 1.75v0c0 .966.784 1.75 1.75 1.75h1c.966 0 1.75.784 1.75 1.75v0a1.75 1.75 0 0 1-1.75 1.75h-2.75"></svg:path></svg:g>`,
})
export class ProiconsNodejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
