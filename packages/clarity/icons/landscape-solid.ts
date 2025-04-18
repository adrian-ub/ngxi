import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLandscapeSolidIcon],svg[clarity-landscape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-4.23 15.88a1 1 0 0 1-.73.32a1 1 0 0 1-.68-.27a1 1 0 0 1-.06-1.41L27.71 19H8.29l1.41 1.52a1 1 0 0 1-.06 1.41a1 1 0 0 1-.64.27a1 1 0 0 1-.73-.32L4.64 18l3.59-3.88a1 1 0 0 1 1.47 1.36L8.29 17h19.42l-1.41-1.52a1 1 0 0 1 1.47-1.36L31.36 18Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLandscapeSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
