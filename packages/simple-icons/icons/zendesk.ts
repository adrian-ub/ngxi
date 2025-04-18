import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZendeskIcon],svg[simple-icons-zendesk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.914 2.904V16.29L24 2.905zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544zm11.086 4.807L0 21.096h11.086zm7.37 7.84a5.54 5.54 0 0 0-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"></svg:path>`,
})
export class SimpleIconsZendeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
