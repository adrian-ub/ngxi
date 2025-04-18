import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEvideaIcon],svg[arcticons-evidea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 22.216h-37L24 5.77zm-4.523 12.569l-27.275-9.977c-.937-.342-1.806.809-1.806 1.806v13.81c0 .997.808 1.806 1.806 1.806h27.275c.998 0 1.807-.809 1.807-1.806V36.59c0-.997-.87-1.463-1.807-1.806zM42.5 22.216l-9.87 10.613m-21.928-8.021l4.537-2.592"></svg:path>`,
})
export class ArcticonsEvideaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
