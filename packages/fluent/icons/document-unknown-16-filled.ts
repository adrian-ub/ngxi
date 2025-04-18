import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentUnknown16FilledIcon],svg[fluent-document-unknown-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M6 1.002h3v3.5a1.5 1.5 0 0 0 1.5 1.5H14v6.996a2 2 0 0 1-2 2H8.666A5.5 5.5 0 0 0 4 5.207V3.002a2 2 0 0 1 2-2z" fill="currentColor"></svg:path><svg:path d="M10.5 5.003h3.497l-3.989-4.001H10v3.5a.5.5 0 0 0 .5.5z" fill="currentColor"></svg:path><svg:path d="M10 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0zm-4.5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25zm0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 0 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215C5.21 10.616 5 10.929 5 11.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318c0-1.104-.822-1.95-1.853-1.95z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentDocumentUnknown16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
