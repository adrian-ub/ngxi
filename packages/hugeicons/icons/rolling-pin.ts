import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRollingPinIcon],svg[hugeicons-rolling-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.437 5.563c-.721-.72-1.537-1.22-2.291-1.455c-.314-.098-.47-.147-.779-.07c-.308.075-.477.244-.816.583l-9.93 9.93c-.339.339-.508.508-.584.816s-.027.465.07.779c.236.754.735 1.57 1.456 2.29c.721.722 1.537 1.22 2.291 1.456c.314.098.47.147.779.07c.308-.075.477-.244.816-.583l9.93-9.93c.338-.339.508-.508.584-.816s.027-.465-.07-.779c-.236-.754-.735-1.57-1.456-2.29M19.29 6c.885-.347 1.9-1.011 2.259-1.371a1.54 1.54 0 0 0-2.178-2.178c-.36.36-1.024 1.374-1.371 2.259M6 19.29c-.347.885-1.011 1.9-1.371 2.259a1.54 1.54 0 0 1-2.178-2.178c.36-.36 1.374-1.024 2.259-1.371" color="currentColor"></svg:path>`,
})
export class HugeiconsRollingPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
