import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTextStyleSolidIcon],svg[streamline-text-style-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1.5c-.11 0-.25.102-.25.292v1.042a.75.75 0 0 1-1.5 0V1.792C.75.832 1.505 0 2.5 0h9c.995 0 1.75.832 1.75 1.792v1.042a.75.75 0 0 1-1.5 0V1.792c0-.19-.14-.292-.25-.292H7.75v11H9.5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5h1.75v-11z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTextStyleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
