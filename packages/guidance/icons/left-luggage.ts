import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLeftLuggageIcon],svg[guidance-left-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 7.5v11m8-11v11m-1-11a3 3 0 1 0-6 0M1 1.5h21.5v21H1m18.5-4h-16v-.177l.202-1.345a26.7 26.7 0 0 0 0-7.956L3.5 7.676V7.5h16v.176l-.203 1.346a26.8 26.8 0 0 0 0 7.956l.203 1.345z"></svg:path>`,
})
export class GuidanceLeftLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
