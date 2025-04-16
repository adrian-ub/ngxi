import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsStitchesLogoIcon],svg[radix-icons-stitches-logo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.85 7.5q0-.431.063-.844l7.65-4.417q.45.177.859.424L3.77 6.503a.45.45 0 0 0-.234.374a.45.45 0 0 0 .196.394l3.592 2.567l-3.453 1.994A5.64 5.64 0 0 1 1.85 7.5m6.518 2.775l.025-.014l1.448-.836l.018-.01l1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.64 5.64 0 0 1 1.849 5.24L5.569 12.81a5.6 5.6 0 0 1-.882-.41zm-.187-.931L4.817 6.939l.692-.4l3.297 2.444zM6.36 6.048l.62-.357l3.296 2.444l-.62.358zm1.973-4.137l-6.09 3.515a5.65 5.65 0 0 1 6.09-3.515M6.847 13.113q.321.037.653.037a5.65 5.65 0 0 0 5.189-3.41zM7.5.85a6.65 6.65 0 1 0 0 13.3a6.65 6.65 0 0 0 0-13.3" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsStitchesLogoIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
