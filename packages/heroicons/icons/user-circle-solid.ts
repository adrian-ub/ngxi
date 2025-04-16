import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsUserCircleSolidIcon],svg[heroicons-user-circle-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.685 19.097A9.72 9.72 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.72 9.72 0 0 0 3.065 7.097A9.72 9.72 0 0 0 12 21.75a9.72 9.72 0 0 0 6.685-2.653m-12.54-1.285A7.49 7.49 0 0 1 12 15a7.49 7.49 0 0 1 5.855 2.812A8.22 8.22 0 0 1 12 20.25a8.22 8.22 0 0 1-5.855-2.438M15.75 9a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsUserCircleSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
