import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleCardboardIcon],svg[arcticons-google-cardboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.202 12.593v-.919a2.16 2.16 0 0 0-2.16-2.16H9.958a2.16 2.16 0 0 0-2.16 2.16v.919m33.542 0H6.66a2.16 2.16 0 0 0-2.16 2.16v21.573a2.16 2.16 0 0 0 2.16 2.16h9.432c3.584 0 3.483-9.868 7.908-9.868s4.324 9.868 7.908 9.868h9.432a2.16 2.16 0 0 0 2.16-2.16V14.753a2.16 2.16 0 0 0-2.16-2.16"></svg:path><svg:circle cx="14.774" cy="25.022" r="4.726" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.226" cy="25.022" r="4.726" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.165 34.978h9.67"></svg:path>`,
})
export class ArcticonsGoogleCardboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
