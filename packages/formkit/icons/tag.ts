import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitTagIcon],svg[formkit-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.07 15.03c-.4 0-.77-.16-1.05-.44l-5.61-5.6c-.28-.28-.44-.66-.44-1.05s.16-.77.44-1.05l4.45-4.46c.28-.28.66-.44 1.05-.44h4.2c.77 0 1.5.3 2.04.85c.55.55.85 1.27.85 2.04v4.2c0 .4-.16.77-.44 1.05l-4.45 4.45c-.28.28-.66.44-1.05.44ZM6.92 2.99c-.13 0-.25.05-.35.14L2.12 7.59c-.09.09-.14.22-.14.35s.05.25.14.35l5.6 5.6c.19.19.5.19.69 0l4.45-4.45a.5.5 0 0 0 .14-.35v-4.2c0-.51-.2-.98-.55-1.34c-.36-.36-.83-.55-1.34-.55H6.92Z"></svg:path><svg:circle cx="10" cy="6" r=".99" fill="currentColor"></svg:circle>`,
})
export class FormkitTagIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
