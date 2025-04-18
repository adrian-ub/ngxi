import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyCameraIcon],svg[arcticons-fossify-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.709 18.203H30.893l-4.805.013c-1.896.005-3.38-1.648-3.403-3.543"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.334 3.167l-6.909 11.968l-2.386 4.16c-.945 1.645-3.117 2.11-4.772 1.181"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.626 8.964l6.974 12.08l2.464 4.265c.898 1.555.065 3.57-1.478 4.49m14.835-11.602c-1.633.968-2.317 3.081-1.365 4.724l4.515 7.793l4.804 8.322"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.735 27.525c-1.653-.928-3.826-.47-4.769 1.174l-2.325 4.054l-6.974 12.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.315 33.324c-.023-1.796-1.351-3.529-3.147-3.528H3.292"></svg:path>`,
})
export class ArcticonsFossifyCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
