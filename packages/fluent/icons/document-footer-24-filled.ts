import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFooter24FilledIcon],svg[fluent-document-footer-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.746 1.996a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498A2.25 2.25 0 0 1 17.9 21.99l-.154.005h-11.5a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V4.246a2.25 2.25 0 0 1 2.096-2.245l.154-.005zM8.501 16a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentDocumentFooter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
