import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCell2x2Icon],svg[iconoir-cell-2x2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M21 3.6V12h-9V3h8.4a.6.6 0 0 1 .6.6Zm0 16.8V12h-9v9h8.4a.6.6 0 0 0 .6-.6ZM3 12V3.6a.6.6 0 0 1 .6-.6H12v9zm0 0v8.4a.6.6 0 0 0 .6.6H12v-9z"></svg:path>`,
})
export class IconoirCell2x2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
