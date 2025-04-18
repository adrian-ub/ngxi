import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DoubleLeftIcon],svg[icons8-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.906 4.78l-10.5 10.5l-.718.72l.718.72l10.5 10.5l1.406-1.44L7.533 16l9.78-9.78l-1.406-1.44zm7 0l-10.5 10.5l-.72.72l.72.72l10.5 10.5l1.407-1.44L14.53 16l9.783-9.78z"></svg:path>`,
})
export class Icons8DoubleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
