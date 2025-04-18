import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMotorwayIcon],svg[openmoji-motorway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M24.519 29.058v4.784l23.47.255l-.064-4.783z"></svg:path><svg:path fill="#b1cc33" d="M11 35.474v19.5l21.154-19.5zm50 0H39.846L61 54.974z"></svg:path><svg:path fill="#5c9e31" d="M40.808 35.474H61v6.158H46.865zm-8.654 0H11v6.158h14.808z"></svg:path><svg:path fill="#d0cfce" d="M11.962 56h48.076L39.846 36.5h-6.731z"></svg:path><svg:path fill="#3f3f3f" d="M26.293 40.605h20.444L39.846 36.5h-6.731z"></svg:path><svg:path fill="#5c9e31" d="M26.674 19.053h18.773v8.21H26.674z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.987"><svg:path d="m11.962 54.974l21.153-19.499m26.923 19.499L39.846 35.475m-16.731 4.01V17m26.25 22.485V17"></svg:path><svg:rect width="19.712" height="9.123" x="26.385" y="18.483" rx="3.053" ry="3.053"></svg:rect><svg:path d="m30.986 48.794l-1.717 5.729m4.385-14.696l-1.38 4.604m9.278 4.363l1.717 5.729m-4.384-14.696l1.38 4.604m-28.303-8.956h48.076M23.115 18.483h5.626m-5.626 9.122h5.626m14.567-9.122h5.625m-5.625 9.122h5.625"></svg:path></svg:g>`,
})
export class OpenmojiMotorwayIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
