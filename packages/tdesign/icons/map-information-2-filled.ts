import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformation2FilledIcon],svg[tdesign-map-information-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.214l-.016-.011a18 18 0 0 1-1.245-.911c-.4-.33-.937-.808-1.477-1.399C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a15 15 0 0 1-1.478 1.399c-.398.328-.82.618-1.244.91zM13.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path><svg:path fill="currentColor" d="M7 10H3.105L1.883 21h20.234l-1.222-11H17v2h2.105l.778 7H4.117l.778-7H7z"></svg:path>`,
})
export class TdesignMapInformation2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
