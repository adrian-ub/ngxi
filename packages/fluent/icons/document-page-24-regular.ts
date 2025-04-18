import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPage24RegularIcon],svg[fluent-document-page-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M17.745 1.996a2.25 2.25 0 0 1 2.244 2.096l.006.154v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-11.5A2.25 2.25 0 0 1 4 19.898l-.005-.154V4.246A2.25 2.25 0 0 1 6.09 2l.154-.005h11.5zm0 1.5h-11.5a.75.75 0 0 0-.743.648l-.007.102v15.498c0 .38.282.693.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648l.007-.102V4.246a.75.75 0 0 0-.649-.743l-.101-.007z" fill="currentColor"></svg:path><svg:path d="M13.019 16.019a.75.75 0 0 1-.624-.858l.105-.661h-1.481l-.142.895a.75.75 0 0 1-1.482-.234L9.5 14.5h-.75a.75.75 0 0 1 0-1.5h.988l.237-1.5H9.25a.75.75 0 0 1 0-1.5h.963l.199-1.26a.75.75 0 1 1 1.481.235L11.731 10h1.482l.199-1.26a.75.75 0 1 1 1.481.235L14.731 10h.519a.75.75 0 1 1 0 1.5h-.756l-.238 1.5h.494a.75.75 0 1 1 0 1.5h-.731l-.142.895a.75.75 0 0 1-.858.624zM11.494 11.5l-.238 1.5h1.482l.237-1.5h-1.481z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentDocumentPage24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
