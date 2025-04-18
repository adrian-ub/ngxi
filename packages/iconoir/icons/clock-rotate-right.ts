import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirClockRotateRightIcon],svg[iconoir-clock-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6h6"></svg:path><svg:path d="M21.888 10.5C21.164 5.689 17.013 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6"></svg:path><svg:path d="M17 16h4.4a.6.6 0 0 1 .6.6V21"></svg:path></svg:g>`,
})
export class IconoirClockRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
