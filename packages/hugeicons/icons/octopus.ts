import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOctopusIcon],svg[hugeicons-octopus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.093 13C17.23 12.098 18 10.85 18 9.47C18 6.72 14.945 2 12 2C9.054 2 6 6.72 6 9.47c0 1.38.77 2.628 1.908 3.53m6.104-3h-.01m-3.99 0h-.01m3.498 4c-.484 4 .4 5.714 3.5 8m-6.5-8c.484 4-.4 5.714-3.5 8m6.5-8c1 2 3.58 4.5 5.547 4.5c1.969 0 2.953-1.231 2.953-2.75S20.898 13 19.54 13m-9.04 1c-1 2-3.58 4.5-5.548 4.5S2 17.269 2 15.75S3.102 13 4.46 13" color="currentColor"></svg:path>`,
})
export class HugeiconsOctopusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
