import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmilingFaceWithHornsIcon],svg[openmoji-smiling-face-with-horns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D22F27" d="M48.856 16q4.5-3 3-9c7 2 6 10 3 15m-31.712-6q-4.5-3-3-9c-7 2-6 10-3 15"></svg:path><svg:path fill="#EA5A47" d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path d="M30 32.925a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m23 25l7 4m19-4l-7 4m6.856-13q4.5-3 3-9c7 2 6 10 3 15m-31.712-6q-4.5-3-3-9c-7 2-6 10-3 15M42.5 43c-1.284.638-3.985 1.03-6.842.998c-2.624-.03-4.99-.414-6.158-.998"></svg:path>`,
})
export class OpenmojiSmilingFaceWithHornsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
