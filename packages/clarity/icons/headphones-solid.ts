import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHeadphonesSolidIcon],svg[clarity-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3A14.27 14.27 0 0 0 4 17.5V31h4.2a1.74 1.74 0 0 0 1.8-1.67v-6.66A1.74 1.74 0 0 0 8.2 21H6v-3.5A12.27 12.27 0 0 1 18 5a12.27 12.27 0 0 1 12 12.5V21h-2.2a1.74 1.74 0 0 0-1.8 1.67v6.67A1.74 1.74 0 0 0 27.8 31H32V17.5A14.27 14.27 0 0 0 18 3" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHeadphonesSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
