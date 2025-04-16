import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsShare16SolidIcon],svg[heroicons-share-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2 2 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5"></svg:path>`,
})
export class HeroiconsShare16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
