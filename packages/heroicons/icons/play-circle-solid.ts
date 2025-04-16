import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPlayCircleSolidIcon],svg[heroicons-play-circle-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m14.024-.983a1.125 1.125 0 0 1 0 1.967l-5.603 3.112A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.922-1.4 1.671-.983z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsPlayCircleSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
