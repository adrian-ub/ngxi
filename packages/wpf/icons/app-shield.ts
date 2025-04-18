import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfAppShieldIcon],svg[wpf-app-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.813.094c-.59.103-1.379.5-2.563 1.093c-1.921.963-4.798 3.41-7.094 3.47a1.1 1.1 0 0 0-.781.374a1.2 1.2 0 0 0-.313.844c.495 10.023 4.099 16.207 10.407 19.813a1.1 1.1 0 0 0 .531.156c.182 0 .367-.064.531-.157c6.308-3.605 9.912-9.789 10.406-19.812a1.2 1.2 0 0 0-.312-.844a1.1 1.1 0 0 0-.781-.375c-2.295-.06-5.174-2.505-7.094-3.468C14.564.595 13.777.197 13.187.093c-.06-.008-.127 0-.187 0s-.129-.01-.188 0zM8.5 7h9A1.5 1.5 0 0 1 19 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 15.5v-7A1.5 1.5 0 0 1 8.5 7M16 8v1h1V8zm-8 2v5.5c0 .275.225.5.5.5h9c.275 0 .5-.225.5-.5V10z"></svg:path>`,
})
export class WpfAppShieldIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
