import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPortraitSolidIcon],svg[clarity-portrait-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-7.48 24.3a1 1 0 0 1 1.36 1.47L18 31.36l-3.88-3.59a1 1 0 0 1 1.36-1.47L17 27.71V8.29L15.48 9.7a1 1 0 0 1-1.36-1.47L18 4.64l3.88 3.59a1 1 0 0 1 .05 1.41a1 1 0 0 1-.73.32a1 1 0 0 1-.68-.26L19 8.29v19.42Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPortraitSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
