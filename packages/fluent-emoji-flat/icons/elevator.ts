import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatElevatorIcon],svg[fluent-emoji-flat-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M13.107 4.23a.477.477 0 0 0-.817 0l-1.226 2.078a.462.462 0 0 0 .408.692h2.452c.363 0 .59-.385.408-.692zm6.603 2.54a.477.477 0 0 1-.817 0l-1.225-2.078A.462.462 0 0 1 18.077 4h2.45c.364 0 .59.385.41.692z"></svg:path><svg:rect width="23" height="19" x="4.5" y="8.5" stroke="#fff" rx="2"></svg:rect><svg:circle cx="9.486" cy="13.504" r="1.176" fill="#fff"></svg:circle><svg:path fill="#fff" d="M8.188 16.3v6.081a.448.448 0 1 0 .897 0v-3.308a.407.407 0 1 1 .815 0v3.308a.448.448 0 1 0 .896 0v-6.08a.276.276 0 1 1 .552 0v1.687a.448.448 0 1 0 .896 0V15.96a.8.8 0 0 0-.797-.798H7.538a.8.8 0 0 0-.798.798v2.028a.448.448 0 1 0 .896 0v-1.687a.276.276 0 1 1 .552 0"></svg:path><svg:circle cx="15.817" cy="13.504" r="1.176" fill="#fff"></svg:circle><svg:path fill="#fff" d="M14.52 16.3v6.081a.448.448 0 1 0 .896 0v-3.308a.408.408 0 0 1 .816 0v3.308a.448.448 0 1 0 .896 0v-6.08a.276.276 0 1 1 .552 0v1.687a.448.448 0 1 0 .896 0V15.96a.8.8 0 0 0-.798-.798H13.87a.8.8 0 0 0-.798.798v2.028a.448.448 0 1 0 .896 0v-1.687a.276.276 0 0 1 .552 0"></svg:path><svg:circle cx="22.15" cy="13.504" r="1.176" fill="#fff"></svg:circle><svg:path fill="#fff" d="M20.853 16.3v6.081a.448.448 0 1 0 .896 0v-3.308a.407.407 0 1 1 .815 0v3.308a.448.448 0 1 0 .896 0v-6.08a.276.276 0 1 1 .552 0v1.687a.448.448 0 1 0 .897 0V15.96a.8.8 0 0 0-.798-.798h-3.909a.8.8 0 0 0-.798.798v2.028a.448.448 0 1 0 .896 0v-1.687a.276.276 0 1 1 .553 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatElevatorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
