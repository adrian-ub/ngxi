import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHome24Icon],svg[fluent-color-home-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHome240)" d="M9 13h6v8H9z"></svg:path><svg:path fill="url(#fluentColorHome241)" d="M13.45 4.533a2.25 2.25 0 0 0-2.9 0L3.8 10.228a2.25 2.25 0 0 0-.8 1.72v7.305c0 .966.784 1.75 1.75 1.75H9.5V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v5.753h4.75a1.75 1.75 0 0 0 1.75-1.75v-7.305a2.25 2.25 0 0 0-.8-1.72z"></svg:path><svg:path fill="url(#fluentColorHome242)" fill-rule="evenodd" d="M12.804 2.299a1.23 1.23 0 0 0-1.608 0l-8.789 7.63a1.167 1.167 0 0 0-.102 1.672a1.23 1.23 0 0 0 1.711.1L12 4.771l7.984 6.93c.5.435 1.266.39 1.71-.1a1.167 1.167 0 0 0-.101-1.673z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorHome243)" fill-rule="evenodd" d="M11.196 2.299a1.23 1.23 0 0 1 1.608 0l8.789 7.63c.5.434.546 1.183.102 1.672a1.23 1.23 0 0 1-1.711.1L12 4.771L4.016 11.7a1.23 1.23 0 0 1-1.71-.1a1.167 1.167 0 0 1 .101-1.673z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorHome240" x1="12" x2="6.707" y1="13" y2="21.825" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome241" x1="4.718" x2="21.568" y1="3.172" y2="17.673" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FFB357"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome242" x1="8.768" x2="13.162" y1="-.375" y2="11.505" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome243" x1="8.768" x2="13.162" y1="-.375" y2="11.505" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHome24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
