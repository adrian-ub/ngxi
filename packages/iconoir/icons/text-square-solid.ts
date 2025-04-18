import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTextSquareSolidIcon],svg[iconoir-text-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35zm4 3.4A.75.75 0 0 1 7 6.25h10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V7.75h-3.5v8.5H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-8.5h-3.5V9a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirTextSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
