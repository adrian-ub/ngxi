import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFramework7IconIcon],svg[logos-framework7-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EE350F" d="M0 128c0-30.764 10.853-58.992 28.939-81.067H227.06L85.735 248.858C35.811 231.4 0 183.882 0 128m237.562-66.219C249.264 81.101 256 103.764 256 128c0 70.692-57.308 128-128 128c-8.47 0-16.746-.823-24.756-2.392zM45.813 29.867C68.05 11.225 96.713 0 128 0s59.951 11.225 82.187 29.867z"></svg:path>`,
})
export class LogosFramework7IconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
