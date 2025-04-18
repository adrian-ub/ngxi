import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSupercastsIcon],svg[arcticons-supercasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.442 11.148l-4.387 4.407a1.917 1.917 0 0 0 .001 2.7l18.6 18.598a1.9 1.9 0 0 0 2.683.005l.006-.005l18.599-18.599a1.917 1.917 0 0 0 .001-2.7l-4.387-4.406a1.9 1.9 0 0 0-1.345-.56H9.791a1.9 1.9 0 0 0-1.345.56Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.894 27.363a8.595 8.595 0 0 1 12.113 0m-15.451-3.338a13.4 13.4 0 0 1 18.885 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.218 20.686a18.226 18.226 0 0 1 25.656 0"></svg:path>`,
})
export class ArcticonsSupercastsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
