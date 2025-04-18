import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6LightIcon],svg[iconamoon-number-6-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.635 4.399a.75.75 0 0 0-1.27-.798zm-6.497 7.53a.75.75 0 0 0 1.27.798zM16.25 15A4.25 4.25 0 0 1 12 19.25v1.5A5.75 5.75 0 0 0 17.75 15zM12 19.25A4.25 4.25 0 0 1 7.75 15h-1.5A5.75 5.75 0 0 0 12 20.75zM7.75 15A4.25 4.25 0 0 1 12 10.75v-1.5A5.75 5.75 0 0 0 6.25 15zM12 10.75A4.25 4.25 0 0 1 16.25 15h1.5A5.75 5.75 0 0 0 12 9.25zm.365-7.149L7.138 11.93l1.27.798L13.635 4.4z"></svg:path>`,
})
export class IconamoonNumber6LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
