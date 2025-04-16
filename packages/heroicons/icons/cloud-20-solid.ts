import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCloud20SolidIcon],svg[heroicons-cloud-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12.5A4.5 4.5 0 0 0 5.5 17H15a4 4 0 0 0 1.866-7.539a3.504 3.504 0 0 0-4.504-4.272A4.5 4.5 0 0 0 4.06 8.235A4.5 4.5 0 0 0 1 12.5"></svg:path>`,
})
export class HeroiconsCloud20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
