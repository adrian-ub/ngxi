import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAssignUserSolidIcon],svg[clarity-assign-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.99" cy="10.36" r="6.81" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"></svg:circle><svg:path fill="currentColor" d="M12 26.65a2.8 2.8 0 0 1 4.85-1.8L20.71 29l6.84-7.63A16.8 16.8 0 0 0 18 18.55A16.13 16.13 0 0 0 5.5 24a1 1 0 0 0-.2.61V30a2 2 0 0 0 1.94 2h8.57l-3.07-3.3a2.8 2.8 0 0 1-.74-2.05" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M28.76 32a2 2 0 0 0 1.94-2v-3.76L25.57 32Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M33.77 18.62a1 1 0 0 0-1.42.08l-11.62 13l-5.2-5.59a1 1 0 0 0-1.41-.11a1 1 0 0 0 0 1.42l6.68 7.2L33.84 20a1 1 0 0 0-.07-1.38" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAssignUserSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
